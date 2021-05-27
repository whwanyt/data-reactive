/*
 * @Author: whwan
 * @Date: 2021-05-23 23:55:51
 * @FilePath: \fenDataReactive\src\fenData\observe.ts
 * 庆贺人生的高潮，尊重人生的低谷，努力工作，好好生活。
 */
import { obServer } from "./obServer";
export function observe(val: object) {
  if (typeof val != 'object') return;
  let ob: obServer;
  if (typeof val['__ob__'] !== 'undefined') {
    ob = val['__ob__'];
  } else {
    ob = new obServer(val);
  }
  return ob;
}