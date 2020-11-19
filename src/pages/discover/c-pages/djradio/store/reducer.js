/*
 * @Author: 牛皓
 * @Date: 2020-11-18 09:25:45
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-18 17:35:08
 * @FilePath: \wx-music\src\pages\discover\c-pages\djradio\store\reducer.js
 */
import {Map} from 'immutable'
import * as actionTypes from './constants'

const defaultState = Map({
    categories:[],
    currentId:0,
    recommends:[],
    radios:[]
})

export default function reducer(state = defaultState,action){
    switch(action.type){
        case actionTypes.CHANGE_RADIO_CATEGORY:
            return state.set("categories",action.categories);
        case actionTypes.CHANGE_CURRENT_ID:
            return state.set("currentId",action.currentId);
        case actionTypes.CHANGE_RADIOS:
            return state.set("radios",action.radios);
        case actionTypes.CHANGE_RECOMMENDS:
            return state.set("recommends",action.recommends);
        default:
            return state;
    }
}