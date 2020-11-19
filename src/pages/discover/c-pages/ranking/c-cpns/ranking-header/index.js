/*
 * @Author: 牛皓
 * @Date: 2020-11-13 17:30:26
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-18 09:24:13
 * @FilePath: \wx-music\src\pages\discover\c-pages\ranking\c-cpns\ranking-header\index.js
 */
import React,{memo,useEffect} from 'react'
import {useSelector,shallowEqual} from 'react-redux'

import {formatMonthDay} from '@/utils/format-utils'
import SongOperationBar from '@/components/song-operation-bar'

import {RankingHeaderWrapper} from './style'

export default memo(function RankingHeader(){
    const state = useSelector(state =>({
        playList:state.getIn(['ranking','playList'])
    }),shallowEqual)
    const topInfo = state.playList

    // useEffect(()=>{
    //     console.log(state,'topInfo')
    // },[])

    return (
        <RankingHeaderWrapper>
            <div className="image">
                <img src={topInfo.coverImgUrl} alt="" />
                <span className="image_cover">封面</span>
            </div>
            <div className="info">
                <div className="title">{topInfo.name}</div>
                <div className="time">
                    <i className="clock sprite_icon2"></i>
                    <div>最近更新：{formatMonthDay(topInfo.updateTime)}</div>
                    <div className="update-f">({"每日更新：TODO"})</div>
                </div>
                <SongOperationBar 
                    favorTitle={`(${topInfo.subscribedCount})`}
                    shareTitle={`(${topInfo.shareCount})`}
                    downloadTitle="下载"
                    commentTitle={`(${topInfo.commentCount})`}
                />
            </div>
        </RankingHeaderWrapper>
    )
})