import { Either, isLeft } from './Either'

import { curry2 } from '@typed/functions'
import { fromRight } from './Right'

/**
 * Returns a `Either` that is the result of calling `f` with the resolved 
 * value of another `Either`.
 * @name chain<A, B, C>(f: (value: B) => Either<A, C>, either: Either<A, B>): Either<A C>
 */
export const chain: EitherChain = curry2(__chain)

function __chain<A, B, C>(f: (value: B) => Either<A, C>, either: Either<A, B>): Either<A, C> {
  return isLeft(either) ? either : f(fromRight(either))
}

export type EitherChain = {
  <A, B, C>(f: (value: B) => Either<A, C>, either: Either<A, B>): Either<A, C>
  <A, B, C>(f: (value: B) => Either<A, C>): (either: Either<A, B>) => Either<A, C>
}
