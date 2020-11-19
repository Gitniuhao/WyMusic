/*
 * @Author: 牛皓
 * @Date: 2020-11-13 09:32:15
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-13 11:25:52
 * @FilePath: \wx-music\src\pages\player\c-cpngs\player-info\index.js
 */
import React,{memo,useState} from 'react'
import {useSelector,shallowEqual} from 'react-redux'

import SongOperationBar from '@/components/song-operation-bar'
import {getSizeImage} from '@/utils/format-utils'

import {InfoWrapper,InfoLeft,InfoRight} from './style'

export default memo(function PlayerInfo(){
    const [isSpread,setIsSpread] = useState(false)

    const {currentSong , currentLyrics} = useSelector(state =>({
        currentSong:state.getIn(['player','currentSong']),
        currentLyrics:state.getIn(['player','currentLyrics'])
    }),shallowEqual)

    const totalLyricCount = isSpread ? currentLyrics : 13;

    return (
        <InfoWrapper>
            <InfoLeft>
                <div className="image">
                    <img src={getSizeImage(currentSong.al.picUrl,130)} alt="" />
                    <span className="cover image_cover"></span>
                </div>
                <div className="link">
                    <i className="sprite_icon2"></i>
                    <a href="#">生成外链播放器</a>
                </div>
            </InfoLeft>
            <InfoRight isSpread={isSpread}>
                <div className="header">
                    <i className="sprite_icon2"></i>
                    <h3 className="title">{currentSong.name}</h3>
                </div>
                <div className="singer">
                    <span className="label">歌手：</span>
                    <a href="/#" className="name">{currentSong.ar[0].name}</a>
                </div>
                <div className="album">
                    <span className="label">所属专辑：</span>
                    <a href="/#" className="name">{currentSong.al.name}</a>
                </div>
                <SongOperationBar
                    favorTitle="收藏"
                    shareTitle="分享"
                    downloadTitle="下载"
                    commentTitle="(167366)"
                />
                <div className="lyric">
                    <div className="lyric-info">
                        {
                            currentLyrics.slice(0 , totalLyricCount).map((item,index) =>{
                                return <p key={item.time} className="text">{item.content}</p>
                            })
                        }
                    </div>
                    <button className="lyric-control" onClick={e=> setIsSpread(!isSpread)}>
                        {isSpread ? '收起' : '展开'}
                    </button>
                </div>
            </InfoRight>
        </InfoWrapper>
    )
})