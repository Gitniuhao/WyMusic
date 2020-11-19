/*
 * @Author: 牛皓
 * @Date: 2020-11-17 15:54:50
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-17 17:39:43
 * @FilePath: \wx-music\src\pages\discover\c-pages\songs\store\actionCreators.js
 */
import * as actionTypes from './constants';
import {PER_PAGE_NUMBER} from './constants'

import {
    getSongCategory,
    getSongCategoryList
} from "@/services/songs"

import {
    handleSongsCategory
} from '@/utils/handle-date'

const changeCategoryAction = (res)=>({
    type:actionTypes.CHANGE_CATEGORY,
    category:res
})
const changeSongListAction = (res)=>({
    type:actionTypes.CHANGE_CATEGORY_SONGS,
    categorySongs:res
})

export const changeCurrentCategoryAction = (name) => ({
    type:actionTypes.CHANGE_CURRENT_CATEGORY,
    currentCategory:name
})

export const getCategory = ()=>{
    return dispatch =>{
        getSongCategory().then(res =>{
            const categoryData = handleSongsCategory(res)
            // console.log('categoryDate',categoryData)
            dispatch(changeCategoryAction(categoryData))
        })
    }
}

export const getSongList = (page)=>{
    return (dispatch,getState)=>{
        // 获取currentCategory
        const name = getState().getIn(['songs','currentCategory']);

        //获取数据
        getSongCategoryList(name,page * PER_PAGE_NUMBER).then(res => {
            dispatch(changeSongListAction(res))
        })
    }
}