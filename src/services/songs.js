/*
 * @Author: 牛皓
 * @Date: 2020-11-17 17:21:59
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-17 17:36:02
 * @FilePath: \wx-music\src\services\songs.js
 */
import request from './request'

export function getSongCategory(){
    return request({
        url:'/playlist/catlist'
    })
}

export function getSongCategoryList(cat="全部", offset=0, limit = 35) {
    return request({
      url: "/top/playlist",
      params: {
        cat,
        limit,
        offset
      }
    })
  }