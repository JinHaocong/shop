/*
 * @Author: Jin Haocong
 * @Date: 2022-08-16 10:37:40
 * @LastEditTime: 2022-08-21 14:14:30
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
