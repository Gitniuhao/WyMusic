/*
 * @Author: 牛皓
 * @Date: 2020-11-04 17:47:57
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-17 10:04:38
 * @FilePath: \wx-music\src\pages\discover\c-pages\artist\index.js
 */
import React,{memo} from 'react';//memo 组件仅在它的 props 发生改变时进行重新渲染

import ArtistCategory from './c-pngs/artist-category'
import ArtistList from './c-pngs/artist-list/alpha-list'
import {ArtistWrapper} from './style'

export default memo(function Artist(){
    return (
        <ArtistWrapper>
            <div className="content wrap-v2">
                <ArtistCategory />
                <ArtistList />
            </div>
        </ArtistWrapper>
    )
})