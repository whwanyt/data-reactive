/*
 * @Author: whwan
 * @Date: 2021-05-21 11:38:54
 * @FilePath: \fenDataReactive\src\index.ts
 * 庆贺人生的高潮，尊重人生的低谷，努力工作，好好生活。
 */
import { observe } from "./fenData/observe";
import { Watcher } from "./fenData/watcher";
var obj = {
  a:{
    b:{
      m:20
    }
  },
  b:[0,1,2,3,4,5]
};
//数据
observe(obj)
// @ts-ignore
// obj.a = 10
//@ts-ignore
// console.log(obj.a.b.m)
// obj.b.push(10)
new Watcher(obj,'a.b.m',(val:string)=>{
  console.log(`--watcher--${val}`)
})
obj.a.b.m = 10
