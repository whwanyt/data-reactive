/*
 * @Author: whwan
 * @Date: 2021-05-12 10:51:20
 * @FilePath: \fenDataReactive\webpack.config.js
 * 庆贺人生的高潮，尊重人生的低谷，努力工作，好好生活。
 */
const path = require('path')
module.exports = {
  //模式
  mode: 'development',
  //入口文件
  entry: './src/index.ts',
  //打包到文件
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
    ]
  },
  //dev-server
  devServer: {
    //静态文件根目录
    contentBase: path.join(__dirname, "www"),
    //不压缩
    compress: false,
    //端口
    port: 8080,
    //虚拟打包路径
    publicPath: '/dist/'
  }
}