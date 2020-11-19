/*
 * @Author: 牛皓
 * @Date: 2020-11-17 15:54:35
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-17 17:47:40
 * @FilePath: \wx-music\src\pages\discover\c-pages\songs\store\reducer.js
 */
import {Map} from 'immutable'
import * as actionTypes from './constants'

const defaultState = Map({
    category:[],
    currentCategory:"全部",
    categorySongs:{}
})

export default function reducer(state = defaultState,action){
    switch(action.type){
        case actionTypes.CHANGE_CATEGORY:
            // console.log(action.category,'category')
            return state.set("category",action.category);
        case actionTypes.CHANGE_CURRENT_CATEGORY:
            return state.set("currentCategory",action.currentCategory);
        case actionTypes.CHANGE_CATEGORY_SONGS:
            // console.log(action.categorySongs,'categorySongs')
            return state.set("categorySongs",action.categorySongs);
        default:
            return state;
    }
}