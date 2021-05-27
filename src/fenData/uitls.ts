/*
 * @Author: whwan
 * @Date: 2021-05-23 23:29:59
 * @FilePath: \fenDataReactive\src\fenData\uitls.ts
 * 庆贺人生的高潮，尊重人生的低谷，努力工作，好好生活。
 */
export function def(obj: object, key: string, value: any, enumerable) {
  Object.defineProperty(obj, key, {
    value,
    enumerable,
    writable: true,
    configurable: true
  })
}