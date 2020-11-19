/*
 * @Author: 牛皓
 * @Date: 2020-11-13 11:08:57
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-13 15:41:43
 * @FilePath: \wx-music\src\pages\player\c-cpngs\player-relevant\index.js
 */
import React,{memo,useEffect} from 'react'
import {useDispatch,useSelector,shallowEqual} from 'react-redux'
import {getSimiSongAction} from '../../store/actioncreators'
import {RelevantWrapper} from './style'
import ThemeHeaderPlayer from '@/components/theme-header-player'

export default memo(function PlayerRelevant(){
    const {simiSongs} = useSelector(state => ({
        simiSongs:state.getIn(['player','simiSongs'])
    }),shallowEqual);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getSimiSongAction());
    },[dispatch])

    return (
        <RelevantWrapper>
            <ThemeHeaderPlayer title="相似歌曲" />
            <div className="songs">
                {
                    simiSongs.map((item,index) =>{
                        return (
                            <div className="song-item" key={item.id}>
                                <div className="info">
                                    <div className='title'>
                                        <a href="#/">{item.name}</a>
                                    </div>
                                    <div className="artist">
                                        <a href="#/">{item.artists[0].name}</a>
                                    </div>
                                </div>
                                <div className="operate">
                                    <button className="item sprite_icon3 play"></button>
                                    <button className="item sprite_icon3 add"></button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </RelevantWrapper>
    )
})