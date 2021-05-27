/*
 * @Author: whwan
 * @Date: 2021-05-21 15:23:30
 * @FilePath: \fenDataReactive\src\fenData\defineReactive.ts
 * 庆贺人生的高潮，尊重人生的低谷，努力工作，好好生活。
 */
import { Dep } from "./dep"
import { observe } from "./observe"
export function defineReactive(data: {}, key: string, val?: any) {

  const dep = new Dep()
  if (arguments.length == 2) {
    val = data[key]
  }
  let childOb = observe(val)

  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get() {
      console.log(`试图访问${key}属性`)
      //处于依赖收集阶段
      // @ts-ignore
      if (Dep.target) {
        dep.depend()
        if(childOb){
          childOb.dep.depend()
        }
      }
      return val;
    },
    set(newValue) {
      console.log(`试图改变${key}属性`)
      if (val === newValue) {
        return;
      }
      val = newValue;
      //发布订阅通知dep
      dep.notify()
    }
  })
}