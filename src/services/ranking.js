/*
 * @Author: 牛皓
 * @Date: 2020-11-16 10:14:19
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-16 10:16:14
 * @FilePath: \wx-music\src\services\ranking.js
 */
import request from './request'

export function getTopList(){
    return request({
        url:'/topList'
    })
}

//获取榜单详情
export function getRankingList(id){
    return request({
        url:'/playlist/detail',
        params:{
            id
        }
    })
}