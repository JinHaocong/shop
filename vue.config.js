/*
 * @Author: Jin Haocong
 * @Date: 2022-08-16 10:37:40
 * @LastEditTime: 2022-09-19 16:00:08
 */
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  //打包不生成map文件
  productionSourceMap: false,
  devServer: {
    open: true,
    host: "localhost", // 打开本地ip
    // host: "local-ip", // 打开本地ip
    client: {
      // logging: 'info', // 日志
      overlay: {
        // 编译错误或警告时 是否全屏显示
        errors: true,
        warnings: false,
      },
      // progress: true, // 在浏览器百分比显示编译进度
      // 指定 URL 到 web socket 服务器
      // To get protocol/hostname/port from browser
      // webSocketURL: 'auto://0.0.0.0:0/ws',
      webSocketURL: {
        hostname: "0.0.0.0", // 不是真正意义上的IP 是一个本地ip的集合
        pathname: "/ws",
        port: 0, // 指定port 只在port相同时 会热更新
      },
    },
    //代理跨越
    proxy: {
      "/api": {
        target: "http://gmall-h5-api.atguigu.cn",
        // pathRewrite: ''
      },
    },
  },
});
