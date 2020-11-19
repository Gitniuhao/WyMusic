/*
 * @Author: 牛皓
 * @Date: 2020-11-12 15:23:04
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-16 14:37:21
 * @FilePath: \wx-music\src\pages\player\app-player-panel\c-pngs\player-header\index.js
 */
import React,{memo} from 'react';
import {useSelector,shallowEqual} from 'react-redux'

import {
    HeaderWrapper,
    HeaderLeft,
    HeaderRight,
} from './style'

export default memo(function PlayerHeader(){
    const {playList,currentSong} = useSelector(state =>({
        playList:state.getIn(['player','playList']),
        currentSong:state.getIn(['player','currentSong']),
    }),shallowEqual);

    return (
        <HeaderWrapper>
            <HeaderLeft>
                <h3>播放列表（{playList.length}）</h3>
                <div className="operator">
                    <button>
                        <i className="sprite_playlist icon favor"></i>
                        收藏全部
                    </button>
                    <button>
                        <i className="sprite_playlist icon remove"></i>
                        清除
                    </button>
                </div>
            </HeaderLeft>
            <HeaderRight>
                {currentSong.name}
            </HeaderRight>
        </HeaderWrapper>
    )
})