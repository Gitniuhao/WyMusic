/*
 * @Author: 牛皓
 * @Date: 2020-11-12 15:40:59
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-12 17:39:10
 * @FilePath: \wx-music\src\pages\player\app-player-panel\c-pngs\player-list\index.js
 */
import React,{memo} from 'react'
import {useSelector,shallowEqual} from 'react-redux'
import classNames from 'classNames'
import {formatMinuteSeconds} from '@/utils/format-utils';
import {PlayListWrapper} from './style'

export default memo(function PlayList(){
    const {playList,currentSongIndex} = useSelector(state => ({
        playList:state.getIn(['player','playList']),
        currentSongIndex:state.getIn(['player','currentSongIndex'])
    }),shallowEqual)

    return (
        <PlayListWrapper>
            {
                playList.map((item,index)=>{
                    return (
                        <div key={item.id}
                            className={classNames("play-item",{"active": currentSongIndex === index})}>
                                <div className="left">{item.name}</div>
                                <div className="right">
                                    <span className="singer">{item.ar[0].name}</span>
                                    <span className="duration">{formatMinuteSeconds(item.dt)}</span>
                                    <span className="sprite_playlist link"></span>
                                </div>
                        </div>
                    )
                })
            }
        </PlayListWrapper>
    )
})