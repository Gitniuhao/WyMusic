/*
 * @Author: 牛皓
 * @Date: 2020-11-16 09:34:30
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-16 13:58:50
 * @FilePath: \wx-music\src\pages\discover\c-pages\ranking\c-cpns\ranking-list\index.js
 */
import React,{memo} from 'react'
import {useSelector , shallowEqual} from 'react-redux'

import {getSizeImage,formatMinuteSeconds} from '@/utils/format-utils'
import ThemeHeaderSong from '@/components/theme-header-song'

import {RankingListWrapper} from './style';

export default memo(function RankingList(){
    const {playList} = useSelector(state =>({
        playList:state.getIn(['ranking','playList'])
    }),shallowEqual);

    const tracks = playList.tracks || [];

    return (
        <RankingListWrapper>
            <ThemeHeaderSong />
            <div className="play-list">
                <table>
                    <thead>
                        <tr className="header">
                            <th className="ranking"></th>
                            <th className="title">标题</th>
                            <th className="duration">时长</th>
                            <th className="Singer">歌手</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tracks.map((item,index)=>{
                                return (
                                    <tr className='' key={item.id}>
                                        <td>
                                            <div className="rank-num">
                                                <span className="num">{index + 1}</span>
                                                <span className="new sprite_icon2"></span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="song-name">
                                                {
                                                    index < 3 ? (<img src={getSizeImage(item.al.picUrl,50)} alt="" />) : null
                                                }
                                                <span className="play sprite_table"></span>
                                                <span className="name">{item.name}</span>
                                            </div>
                                        </td>
                                        <td>{formatMinuteSeconds(item.dt)}</td>
                                        <td>{item.ar[0].name}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </RankingListWrapper>
    )
})