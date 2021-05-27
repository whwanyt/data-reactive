/*
 * @Author: whwan
 * @Date: 2021-05-23 20:12:36
 * @FilePath: \fenDataReactive\src\fenData\obServer.ts
 * 庆贺人生的高潮，尊重人生的低谷，努力工作，好好生活。
 */
import { defineReactive } from './defineReactive'
import { def } from './uitls'
import { arrayMethods } from './array'
import { observe } from './observe'
import { Dep } from './dep'
//将object每一层都转为可侦测
export class obServer {
  public dep: Dep
  constructor(value:object) {
    this.dep = new Dep()
    def(value, '__ob__', this, false)
    if(Array.isArray(value)){
      Object.setPrototypeOf(value,arrayMethods)
      this.observeArray(value)
    }else{
      this.walk(value)
    }
  }

  walk(value:object){
    for (const key in value) {
      defineReactive(value,key)
    }
  }

  observeArray(arr:object){
    for (const key in arr) {
      const item = arr[key]
      observe(item)
    }
  }
}