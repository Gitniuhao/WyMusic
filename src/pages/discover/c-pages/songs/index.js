/*
 * @Author: 牛皓
 * @Date: 2020-11-04 17:47:57
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-17 17:26:23
 * @FilePath: \wx-music\src\pages\discover\c-pages\songs\index.js
 */
import React,{memo,useEffect} from 'react';//memo 组件仅在它的 props 发生改变时进行重新渲染
import {useDispatch} from 'react-redux'
import {
    getCategory,
    getSongList
} from './store/actionCreators'

import SongHeader from './c-pngs/songs-header'
import SongList from './c-pngs/songs-list'
import {SongsWrapper} from './style'


export default memo(function Songs(){
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getCategory());
        dispatch(getSongList(0))
    },[dispatch])

    return (
        <SongsWrapper className="wrap-v2">
            <SongHeader />
            <SongList />
        </SongsWrapper>
    )
})