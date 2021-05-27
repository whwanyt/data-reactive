/*
 * @Author: whwan
 * @Date: 2021-05-24 21:27:17
 * @FilePath: \fenDataReactive\src\fenData\dep.ts
 * 庆贺人生的高潮，尊重人生的低谷，努力工作，好好生活。
 */
import { Watcher, Watchers } from "./watcher";

var uid = 0;
export class Dep {
  public id: number;
  public subs: Watchers
  constructor() {
    this.id = uid++;
    //用数组存储自己的订阅者
    this.subs = [];
  }

  addSub(sub:Watcher){
    this.subs.push(sub)
  }

  depend(){
    // @ts-ignore
    if(Dep.target){
      // @ts-ignore
      this.addSub(Dep.target)
    }
  }

  notify() {
    //浅拷贝一份
    const subs = this.subs.slice()
    for (const key in subs) {
      const info = subs[key];
      info.update()
    }
  }
}