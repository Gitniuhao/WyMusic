/*
 * @Author: 牛皓
 * @Date: 2020-11-18 15:49:15
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-18 15:52:28
 * @FilePath: \wx-music\src\services\djradio.js
 */
import request from './request'

export function getDjRadioCatelist(){
    return request({
        url:'/dj/catelist'
    })
}

export function getDjRadioRecommend(type){
    return request({
        url:'/dj/recommend/type',
        params:{
            type
        }
    })
}

export function getDjRadios(cateId,limit,offset){
    return request({
        url:'/dj/radio/hot',
        params:{
            cateId,
            limit,
            offset
        }
    })
}