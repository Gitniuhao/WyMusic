/*
 * @Author: 牛皓
 * @Date: 2020-11-05 11:47:51
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-13 16:28:04
 * @FilePath: \wx-music\src\pages\discover\c-pages\recommend\store\actionCreators.js
 */
import * as actionTypes from './constants';

import {getTopBanners,getHotRecommends,getNewAlbums,getTopList,getArtistList} from '@/services/recommend'//从网络请求里导入数据

//轮播图获取及存储数据
const changeTopBannerAction =(res) =>({
    type:actionTypes.CHANGE_TOP_BANNERS,
    topBanners:res.banners
})
export const getTopBannerAction = ()=>{
    return dispatch =>{
        getTopBanners().then(res=>{
            dispatch(changeTopBannerAction(res));
        })
    }
}

//热门推荐部分获取及存储数据
const changeHotRecommendAction = (res=>({
    type:actionTypes.CHANGE_HOT_RECOMMEND,
    hotRecommends:res.result
}))
export const getHotRecommendAction = (limit)=>{
    return dispatch =>{
        getHotRecommends(limit).then(res =>{
            dispatch(changeHotRecommendAction(res))
        })
    }
}

//新碟上架部分获取及存储数据
const changeNewAlbumAction = (res)=>({
    type:actionTypes.CHANGE_NEW_ALBUM,
    newAlbums:res.albums
})
export const getNewAlbumAction = (limit)=>{
    return dispatch => {
        getNewAlbums(limit).then(res =>{
            dispatch(changeNewAlbumAction(res))
        })
    }
}

//获取及存储榜单数据
const changeUpRankingAction = (res)=>({
    type:actionTypes.CHANGE_UP_RANKING,
    upRanking:res.playlist
})
const changeNewRankingAction = (res)=>({
    type:actionTypes.CHANGE_NEW_RANKING,
    newRanking:res.playlist
})
const changeOriginRankingAction = (res)=>({
    type:actionTypes.CHANGE_ORIGIN_RANKING,
    originRanking:res.playlist
})

export const getTopListAction = (idx)=>{
    return dispatch => {
        getTopList(idx).then(res => {
            switch (idx){
                case 0:
                    dispatch(changeUpRankingAction(res));
                    break;
                case 2:
                    dispatch(changeNewRankingAction(res));
                    break;
                case 3:
                    dispatch(changeOriginRankingAction(res))
                    break;
                default:
                    return {};
            }
        })
    }
}


const changeSettleSingsAction = (res) => ({
    type: actionTypes.CHANGE_SETTLE_SONGER,
    settleSings: res.artists
  })
export const getSettleSingers = ()=>{
    return dispatch =>{
        getArtistList(5,5001).then(res=>{
            dispatch(changeSettleSingsAction(res))
        })
    }
}