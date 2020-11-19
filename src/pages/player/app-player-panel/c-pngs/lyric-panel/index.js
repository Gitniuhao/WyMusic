/*
 * @Author: 牛皓
 * @Date: 2020-11-12 16:37:48
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-12 17:13:02
 * @FilePath: \wx-music\src\pages\player\app-player-panel\c-pngs\lyric-panel\index.js
 */
import React,{memo,useRef,useEffect} from 'react'
import {useSelector , shallowEqual} from 'react-redux'
import classNames from 'classNames'
import {scrollTo} from '@/utils/ui-helper'

import {PanelWrapper} from './style'

export default memo(function LyricPanel(){
    const {currentLyrics,currentLyricIndex} = useSelector(state => ({
        currentLyricIndex:state.getIn(['player','currentLyricIndex']),
        currentLyrics:state.getIn(['player','currentLyrics'])
    }),shallowEqual)

    const panelRef = useRef();
    useEffect(()=>{
        if(currentLyricIndex >0 && currentLyricIndex < 3) return;
        scrollTo(panelRef.current,(currentLyricIndex - 3) * 32,300)
    },[currentLyricIndex])

    return (
        <PanelWrapper ref={panelRef}>
            <div classNames="lrc-content">
                {
                    currentLyrics.map((item,index)=>{
                        return (
                            <div key={item.key}
                                className={classNames('lrc-item',{"active" : index === currentLyricIndex})}
                            >
                                {item.content}
                            </div>
                        )
                    })
                }
            </div>
        </PanelWrapper>
    )
})