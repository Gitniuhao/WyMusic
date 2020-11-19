/*
 * @Author: 牛皓
 * @Date: 2020-11-05 11:17:54
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-13 16:21:30
 * @FilePath: \wx-music\src\services\recommend.js
 */
import request from "./request";

export function getTopBanners() {
  return request({
    url: "/banner"
  })
}

export function getHotRecommends(limit){
  return request({
    url:'/personalized',
    params:{
      limit
    }
  })
}

export function getNewAlbums(limit){
  return request({
    url:'top/album',
    params:{
      limit,
    }
  })
}

export function getTopList(idx){
  return request({
    url:"/top/list",
    params:{
      idx
    }
  })
}

export function getArtistList(limit, cat){
  return request({
    url:'/artist/list',
    params:{
      cat,
      limit
    }
  })
}