/*
 * @Author: 牛皓
 * @Date: 2020-11-17 10:46:06
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-17 14:38:27
 * @FilePath: \wx-music\src\services\album.js
 */
import request from './request'

export function getHotAlbums() {
    return request({
      url: "/album/newest"
    })
  }

export function getTopAlbums(limit, offset) {
    return request({
      url: "/top/album",
      params: {
        limit,
        offset
      }
    })
  }