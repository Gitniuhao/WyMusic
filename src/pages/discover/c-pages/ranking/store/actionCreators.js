/*
 * @Author: 牛皓
 * @Date: 2020-11-13 17:24:24
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-16 14:32:15
 * @FilePath: \wx-music\src\pages\discover\c-pages\ranking\store\actionCreators.js
 */
import * as actionTypes from './constants'

import {getTopList,getRankingList} from '@/services/ranking'

export const changeCurrentIndex = (index)=>({
    type:actionTypes.CHANGE_CURRENT_INDEX,
    currentIndex:index
})

const changeTopListAction = (res)=>({
    type:actionTypes.CHANGE_TOP_LIST,
    topList:res.list
})
export const getTops = ()=>{
    return dispatch => {
        getTopList().then( res=>{
            dispatch(changeTopListAction(res));
        })
    }
}

const changePlayListAction = (res)=>({
    type:actionTypes.CHANGE_PLAY_LIST,
    playList:res.playlist
})
export const getRanking = (id)=>{
    return dispatch => {
        getRankingList(id).then(res => {
            // console.log(res,'res')
            dispatch(changePlayListAction(res))
        })
    }
}

