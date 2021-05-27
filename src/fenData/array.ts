/*
 * @Author: whwan
 * @Date: 2021-05-24 00:04:29
 * @FilePath: \fenDataReactive\src\fenData\array.ts
 * 庆贺人生的高潮，尊重人生的低谷，努力工作，好好生活。
 */

import { def } from "./uitls";

const methodsNeedChange = ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"]

const arrayPrototype = Array.prototype;

//以array.prototype为原型创建arrayMethods对象
export const arrayMethods = Object.create(arrayPrototype);

methodsNeedChange.forEach(methodName => {
  //备份原方法
  const original = arrayPrototype[methodName]
  // 定义新方法
  def(arrayMethods, methodName, function () {
    //恢复原功能
    original.apply(this, arguments);
    //把类数组变成数组
    const args = [...arguments];
    const ob = this.__ob__;
    //有三种方式能插入新项，将新项也变成observer
    let inserted = [];
    switch (methodName) {
      case 'push':
      case 'unshift':
        inserted = args;
        break;
      case 'splice':
        inserted = args.slice(2)
        break;
    }
    if (inserted) {
      ob.observeArray(inserted)
    }
  }, false)
})