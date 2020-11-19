/*
 * @Author: 牛皓
 * @Date: 2020-11-13 17:24:42
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-16 10:26:01
 * @FilePath: \wx-music\src\pages\discover\c-pages\ranking\store\reducer.js
 */
import {Map} from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
    playList:{},
    currentIndex:0,
    topList:[]
})

export default function reducer(state = defaultState,action){
    switch(action.type){
        case actionTypes.CHANGE_PLAY_LIST:
            return state.set("playList",action.playList)
        case actionTypes.CHANGE_TOP_LIST:
            return state.set("topList",action.topList)
        case actionTypes.CHANGE_CURRENT_INDEX:
            return state.set("currentIndex",action.currentIndex)
        default:
            return state;
    }
}