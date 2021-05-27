/*
 * @Author: whwan
 * @Date: 2021-05-27 17:43:10
 * @FilePath: \fenDataReactive\src\fenData\parsePath.ts
 * 庆贺人生的高潮，尊重人生的低谷，努力工作，好好生活。
 */
export function parsePath(str: string): object {
  const segments = str.split('.')
  return (obj: object) => {
    for (const key in segments) {
      if (!obj) return;
      obj = obj[segments[key]];
    }
    return obj;
  }
}