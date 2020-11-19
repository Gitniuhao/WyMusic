/*
 * @Author: 牛皓
 * @Date: 2020-11-04 16:03:35
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-04 16:05:37
 * @FilePath: \wx-music\craco.config.js
 */
const path = require('path');

const resolve = dir => path.resolve(__dirname,dir);

module.exports = {
    webpack:{
        alias:{
            "@":resolve('src'),
            "components":resolve("src/components")
        }
    }
}