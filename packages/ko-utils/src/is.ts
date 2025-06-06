const toString = (v: any) => Object.prototype.toString.call(v)

export function getRealType(v: any) {
  if (v === null)
    return 'null'
  const type = toString(v).slice(8, -1).toLowerCase()
  return (typeof v === 'object' || typeof v === 'function') ? type : typeof v
}

export const isDef = <T = any>(val?: T): val is T => typeof val !== 'undefined'
export const isBoolean = (val: any): val is boolean => typeof val === 'boolean'
// eslint-disable-next-line ts/no-unsafe-function-type
export const isFunction = <T extends Function> (val: any): val is T => typeof val === 'function'
export const isNumber = (val: any): val is number => typeof val === 'number'
export const isString = (val: unknown): val is string => typeof val === 'string'
export const isObject = (val: any): val is object => toString(val) === '[object Object]'
export const isUndefined = (val: any): val is undefined => toString(val) === '[object Undefined]'
export const isNull = (val: any): val is null => toString(val) === '[object Null]'
export const isRegExp = (val: any): val is RegExp => toString(val) === '[object RegExp]'
export const isDate = (val: any): val is Date => toString(val) === '[object Date]'

/**
 * Check if a value is primitive
 */
export function isPrimitive(val: any): val is string | number | boolean | symbol | bigint | null | undefined {
  return !val || Object(val) !== val
}

// @ts-expect-error
export const isWindow = (val: any): boolean => typeof window !== 'undefined' && toString(val) === '[object Window]'

// @ts-expect-error
export const isBrowser = typeof window !== 'undefined'
