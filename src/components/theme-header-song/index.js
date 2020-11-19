/*
 * @Author: 牛皓
 * @Date: 2020-11-16 14:00:15
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-16 14:12:33
 * @FilePath: \wx-music\src\components\theme-header-song\index.js
 */
import React,{memo} from 'react'
import {useSelector,shallowEqual} from 'react-redux'

import {HeaderWrapper} from './style'

export default memo(function ThemeHeaderSong(){
    const {playList} = useSelector(state => ({
        playList:state.getIn(['ranking','playList'])
    }),shallowEqual)

    return (
        <HeaderWrapper>
            <div className="left">
                <h3 className="title">歌曲列表</h3>
                <div className="count">{playList.trackCount}</div>
            </div>
            <div className="right">
                <span>播放：</span>
                <span className="count">{playList.playCount}</span>
                <span>次</span>
            </div>
        </HeaderWrapper>
    )
})
