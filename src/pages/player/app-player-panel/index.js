/*
 * @Author: 牛皓
 * @Date: 2020-11-12 15:18:43
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-12 17:41:00
 * @FilePath: \wx-music\src\pages\player\app-player-panel\index.js
 */
import React,{memo} from 'react'
import {useSelector,shallowEqual} from 'react-redux'

import PlayerHeader from './c-pngs/player-header';
import PlayerList from './c-pngs/player-list'
import LyricPanel from './c-pngs/lyric-panel'

import {PanelWrapper} from './style'
import {getSizeImage} from '@/utils/format-utils'

export default memo(function AppPlayList(){
    const {currentSong} = useSelector(state => ({
        currentSong:state.getIn(['player','currentSong'])
    }),shallowEqual)

    return (
        <PanelWrapper>
            <PlayerHeader />
            <div className="main">
                <img className="image" src={getSizeImage(currentSong.al.picUrl,60)} alt="" />
                <PlayerList />
                <LyricPanel />
            </div>
        </PanelWrapper>
    )
})