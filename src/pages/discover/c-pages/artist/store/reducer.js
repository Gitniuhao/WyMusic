/*
 * @Author: 牛皓
 * @Date: 2020-11-16 14:40:37
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-16 14:46:59
 * @FilePath: \wx-music\src\pages\discover\c-pages\artist\store\reducre.js
 */
import {Map} from 'immutable'
import * as actionTypes from './constants'
 const defaultState = Map({
    currentArea:-1,
    currentType:{
        name:"推荐歌手",
        type:1
    }
 })

 export default function reducer(state=defaultState,action){
     switch(action.type){
        case actionTypes.CHANGE_CURRENT_AREA:
            return state.set("currentArea",action.currentArea);
        case actionTypes.CHANGE_CURRENT_TYPE:
            return state.set('currentType',action.currentType)
        default:
            return state;
     }
 }