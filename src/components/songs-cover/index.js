/*
 * @Author: 牛皓
 * @Date: 2020-11-06 16:03:52
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-06 17:46:08
 * @FilePath: \wx-music\src\components\songs-cover\index.js
 */
import React,{memo} from 'react'

import {getCount , getSizeImage} from '@/utils/format-utils'
import {SongsCoverWrapper} from './style'

export default memo(function SongsCover(props){
    const {info} = props;

    return (
        <SongsCoverWrapper>
            <div className="cover-top">
                <img src={getSizeImage(info.picUrl)} alt="" />
                <div className="cover sprite_cover">
                    <div className="info sprite_cover">
                        <span>
                            <i className="sprite_icon erji"></i>
                            {getCount(info.playCount)}
                        </span>
                        <i className="sprite_icon play"></i>
                    </div>
                </div>
            </div>
            <div className="civer-bottom text-nowrap">
                {info.name}
            </div>
            <div className="cover-source text-nowrap">
                by {info.copywriter || info.creator.nickname}
            </div>
        </SongsCoverWrapper>
    )
})