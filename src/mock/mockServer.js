import Mock from 'mockjs'
//引入json数据格式 --- webpack默认对外暴露图片、JSON
import banner from './banner.json'
import floor from './floor.json'
// mock数组
Mock.mock('/mock/banner', { code: 200, data: banner })
Mock.mock('/mock/floor', { code: 200, data: floor })
