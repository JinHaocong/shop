/*
 * @Author: Jin Haocong
 * @Date: 2022-08-16 10:37:40
 * @LastEditTime: 2022-08-21 22:21:23
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //打包不生成map文件
  productionSourceMap: false,
  devServer: {
    //代理跨越
    proxy: {
      '/api': {
        target: 'http://gmall-h5-api.atguigu.cn',
        // pathRewrite: ''
      }
    }
  }
})
  