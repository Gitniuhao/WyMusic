/*
 * @Author: 牛皓
 * @Date: 2020-11-04 17:47:57
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-17 14:08:32
 * @FilePath: \wx-music\src\pages\discover\c-pages\album\index.js
 */
import React,{memo} from 'react';//memo 组件仅在它的 props 发生改变时进行重新渲染
import HotAlbum from './c-pngs/hot-album'
import TopAlbum from './c-pngs/top-album'
import {AlbumWrapper} from './style'

export default memo(function Album(){
    return (
        <AlbumWrapper className="wrap-v2">
            <HotAlbum />
            <TopAlbum />
        </AlbumWrapper>
    )
})