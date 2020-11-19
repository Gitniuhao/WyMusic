/*
 * @Author: 牛皓
 * @Date: 2020-11-13 13:39:16
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-18 17:52:06
 * @FilePath: \wx-music\src\pages\player\c-cpngs\player-song\index.js
 */
import React,{memo,useEffect} from 'react'
import {useDispatch,useSelector,shallowEqual} from 'react-redux'

import {getSizeImage} from '@/utils/format-utils'
import ThemeHeaderPlayer from '@/components/theme-header-player'

import {PlaySongWrapper} from './style'
import {getSimiPlaylistAction} from '../../store/actioncreators'

export default memo(function PlaySongs(){
    const {simiPlaylist} = useSelector(state =>({
        simiPlaylist:state.getIn(['player','simiPlaylist'])
    }),shallowEqual)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSimiPlaylistAction())
    }, [dispatch])

    return (
        <PlaySongWrapper>
            <ThemeHeaderPlayer title="包含这首歌的歌单" />
            <div className="songs">
                {
                    simiPlaylist.map((item,index)=>{
                        return (
                            <div className="song-item" key={item.id}>
                                <a className="image" href="/#">
                                    <img src={getSizeImage(item.coverImgUrl,50)} alt="" />
                                </a>
                                <div className="info text-nowrap">
                                    <a href="#/" className="name">{item.name}</a>
                                    <div className="auchor">
                                        by
                                        <a href="#/" className="nickname">{item.creator.nickname}</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </PlaySongWrapper>
    )
})
