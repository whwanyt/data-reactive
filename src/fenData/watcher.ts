/*
 * @Author: whwan
 * @Date: 2021-05-25 08:11:43
 * @FilePath: \fenDataReactive\src\fenData\watcher.ts
 * 庆贺人生的高潮，尊重人生的低谷，努力工作，好好生活。
 */

import { Dep } from "./dep";
import { parsePath } from "./parsePath";

export type Watchers = Watcher[]

var uid = 0;
export class Watcher {
  public id: number;
  public target: any;
  public getter: any;
  public value: any;
  public callback: any;
  constructor(target, expression, callback) {
    console.log('我是Watcher类的构造器')
    this.id = uid++;
    this.target = target
    this.getter = parsePath(expression);
    this.callback = callback;
    this.value = this.get()
  }
  update() {
    this.run()
  }

  get() {
    //进入依赖收集阶段
    // @ts-ignore
    Dep.target = this;
    const obj = this.target;
    let value:any;
    try {
      value = this.getter(obj)
    } finally {
      //@ts-ignore
      Dep.target = null;
    }
    return value;
  }

  run(){
    this.getAndInvoKe(this.callback)
  }

  getAndInvoKe(callback: any) {
    const value = this.get()
    if(value !== this.value || typeof value == 'object'){
      const oldValue = this.value;
      this.value = value;
      callback.call(this.target,value,oldValue)
    }
  }
}

// function parsePath(expression: any): any {
//   throw new Error("Function not implemented.");
// }
