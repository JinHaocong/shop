/*
 * @Author: Jin Haocong
 * @Date: 2022-08-17 11:13:18
 * @LastEditTime: 2022-08-17 14:04:05
 */


//先引入 mockjs模块 注意大写
import Mock from 'mockjs'
//把json数据引入
//webpack 默认对外暴露的：图片 JSON
import banner from './banner.json'
import floor from './floor.json'

//mock 数据 第一个参数是请求地址  第二个参数是请求数据
Mock.mock('/mock/banner', { code: 200, data: banner }) //模拟首页大轮播图
Mock.mock('/mock/floor', { code: 200, data: floor }) //家用电器