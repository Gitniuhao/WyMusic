/*
 * @Author: 牛皓
 * @Date: 2020-11-05 11:48:26
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-13 16:20:48
 * @FilePath: \wx-music\src\pages\discover\c-pages\recommend\store\reducer.js
 */
import {Map} from 'immutable'

import * as actionTypes from './constants';

const defaultState = Map({
    topBanners : [],
    hotRecommends:[],
    newAlbums:[],
    
    upRanking:{},
    newRanking:{},
    originRanking:{},
    settleSings:[]
})

function reducer(state = defaultState,action){
    switch(action.type){
        case actionTypes.CHANGE_TOP_BANNERS:
            return state.set("topBanners",action.topBanners);
        case actionTypes.CHANGE_HOT_RECOMMEND:
            return state.set("hotRecommends",action.hotRecommends);
        case actionTypes.CHANGE_NEW_ALBUM:
            return state.set('newAlbums',action.newAlbums);
        case actionTypes.CHANGE_UP_RANKING:
            // console.log(action.upRanking,'reducer')
            return state.set("upRanking", action.upRanking);
        case actionTypes.CHANGE_NEW_RANKING:
            return state.set("newRanking", action.newRanking);
        case actionTypes.CHANGE_ORIGIN_RANKING:
            return state.set("originRanking", action.originRanking);
        case actionTypes.CHANGE_SETTLE_SONGER:
            return state.set("settleSings",action.settleSings)
        default:
            return state;
    }
}

export default reducer;