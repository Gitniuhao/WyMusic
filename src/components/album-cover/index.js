/*
 * @Author: 牛皓
 * @Date: 2020-11-09 09:27:38
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-17 15:03:50
 * @FilePath: \wx-music\src\components\album-cover\index.js
 */
import React,{memo} from 'react'

import {getSizeImage} from '@/utils/format-utils';
//getSizeImage是网抑云音乐为了加快图片的加载速度，在图片后面可以拼接一个params参数，然后传入宽高，这样就可以让我们
//的图片变为我们传入的宽高,这样加载的时候的速度就会很快
import {AlbumWrapper} from './style'

export default memo(function AlbumCover(props){
    const {info,size=130,width = 153,bgp='-845px'} = props

    return (
        <AlbumWrapper size={size} width={width} bgp={bgp}>
            <div className="album-image">
                <img src={getSizeImage(info.picUrl,size)} alt="" />
                <a href="/todo" className="cover image_cover">{info.name}</a>
            </div>
            <div className="album-info">
                <div className="name text-nowrap">{info.name}</div>
                <div className="artist text-nowrap">{info.artist.name}</div>
            </div>
        </AlbumWrapper>
    )
})