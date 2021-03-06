import { List } from '../types'
import { arrayFrom } from '../arrayFrom'
import { curry2 } from '@typed/functions'

/**
 * Sorts a `List`.
 * @name sort<A>(comparator: Comparator<A>, list: List<A>): Array<A>
 */
export const sort: Sort = curry2(__sort)

export type Sort = {
  <A>(comparator: (a: A, b: A) => number, list: List<A>): Array<A>
  <A>(comparator: (a: A, b: A) => number): (list: List<A>) => Array<A>
}

function __sort<A>(comparator: (a: A, b: A) => number, list: List<A>): Array<A> {
  return arrayFrom(list)
    .slice(0)
    .sort(comparator)
}
