/*
 * @Author: 牛皓
 * @Date: 2020-11-10 10:24:16
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-11 17:37:24
 * @FilePath: \wx-music\src\services\player.js
 */
import request from './request'

export function getSongDetail(ids){
    return request({
        url:'/song/detail',
        params:{
            ids
        }
    })
}

export function getLyric(id) {
    return request({
      url: "/lyric",
      params: {
        id
      }
    })
  }
  
  export function getSimiPlaylist(id) {
    return request({
      url: "/simi/playlist",
      params: {
        id
      }
    })
  }
  
  export function getSimiSong(id) {
    return request({
      url: "/simi/song",
      params: {
        id
      }
    })
  }