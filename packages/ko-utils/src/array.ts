import type { Nullable } from './types'

export function toArray<T>(array?: Nullable<T | Array<T>>): Array<T> {
  array = array ?? []
  return Array.isArray(array) ? array : [array]
}

export function at(array: readonly [], index: number): undefined
export function at<T>(array: readonly T[], index: number): T
export function at<T>(array: readonly T[] | [], index: number): T | undefined {
  const len = array.length
  if (!len)
    return undefined

  if (index < 0)
    index += len

  return array[index]
}

export function last(array: readonly []): undefined
export function last<T>(array: readonly T[]): T
export function last<T>(array: readonly T[]): T | undefined {
  return at(array, -1)
}
