/*
 * @Author: 牛皓
 * @Date: 2020-11-16 14:41:10
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-17 10:02:58
 * @FilePath: \wx-music\src\pages\discover\c-pages\artist\store\actionCreators.js
 */
import * as actionTypes from './constants'

export const changeCurrentAreaAction = (area) =>({
    type:actionTypes.CHANGE_CURRENT_AREA,
    currentArea:area
})

export const changeCurrentTypeAction = (type) =>({
    type:actionTypes.CHANGE_CURRENT_TYPE,
    currentType:type
})