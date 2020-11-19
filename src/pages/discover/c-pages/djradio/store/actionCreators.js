/*
 * @Author: 牛皓
 * @Date: 2020-11-18 09:26:03
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-18 16:23:04
 * @FilePath: \wx-music\src\pages\discover\c-pages\djradio\store\actionCreators.js
 */
import {
    getDjRadioCatelist,
    getDjRadioRecommend,
    getDjRadios
} from '@/services/djradio';
import * as actionTypes from './constants';

const changeCategoryAction = (res) =>({
    type:actionTypes.CHANGE_RADIO_CATEGORY,
    categories:res.categories
})
const changeRadiosAction = (res)=>({
    type:actionTypes.CHANGE_RADIOS,
    radios:res.djRadios
})
const changeRecommendsAction = (res)=>({
    type:actionTypes.CHANGE_RECOMMENDS,
    recommends:res.djRadios
})

export const changeCurrentIdAction = (id)=>({
    type:actionTypes.CHANGE_CURRENT_ID,
    currentId:id
})
export const getRadioCategories = ()=> {
    return dispatch => {
        getDjRadioCatelist().then(res => {
            dispatch(changeCategoryAction(res))
            const currentId = res.categories[0].id;//获取返回的categories数组的第0项的id作为currentId
            dispatch(changeCurrentIdAction(currentId))
        })
    }
}

export const getRadios = (currentId,offset)=>{
    return dispatch =>{
        getDjRadios(currentId,30,offset).then(res =>{
            dispatch(changeRadiosAction(res))
        })
    }
}

export const getRadioRecommend =(currentId)=>{
    return dispatch =>{
        getDjRadioRecommend(currentId).then(res =>{
            dispatch(changeRecommendsAction(res))
        })
    }
}