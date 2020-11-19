/*
 * @Author: 牛皓
 * @Date: 2020-11-17 10:51:50
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-18 09:21:47
 * @FilePath: \wx-music\src\pages\discover\c-pages\album\store\actionCreators.js
 */
import * as actionTypes from './constants';
import {getHotAlbums,getTopAlbums} from '@/services/album.js';


const changeHotAlbumsAction = (res)=>({
    type:actionTypes.CHANGE_HOT_ALBUMS,
    hotAlbums:res.albums
})
const changeTopAlbumAction = (res)=>({
    type:actionTypes.CHANGE_TOP_ALBUMS,
    topAlbums:res.albums
})
const changeTopTotalAction = (total)=>({
    type:actionTypes.CHANGE_TOP_TOTAL,
    total:total
})

export const getHotAlbumsAction = ()=>{
    return dispatch => {
        getHotAlbums().then(res =>{
            dispatch(changeHotAlbumsAction(res))
        })
    }
}

export const getTopAlbumsAction = (page) => {
    return dispatch => {
        getTopAlbums(30,(page-1) * 30).then(res => {
            dispatch(changeTopAlbumAction(res));
            dispatch(changeTopTotalAction(res.total))
        })
    }
}
