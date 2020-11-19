/*
 * @Author: 牛皓
 * @Date: 2020-11-17 10:51:20
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-17 15:52:12
 * @FilePath: \wx-music\src\pages\discover\c-pages\album\store\reducer.js
 */
import {Map} from 'immutable'
import * as actionTypes from './constants'
    
const defaultState = Map({
    hotAlbums:[],
    topAlbums:[],
    topTotal:0
})

export default function reducer(state = defaultState,action){
    switch(action.type){
        case actionTypes.CHANGE_HOT_ALBUMS:
            return state.set('hotAlbums',action.hotAlbums);
        case actionTypes.CHANGE_TOP_ALBUMS:
            return state.set('topAlbums',action.topAlbums);
        case actionTypes.CHANGE_TOP_TOTAL:
            return state.set('topTotal',action.total);
        default:
            return state;
    }
}