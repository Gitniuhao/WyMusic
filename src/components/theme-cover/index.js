/*
 * @Author: 牛皓
 * @Date: 2020-11-17 16:59:28
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-17 17:06:58
 * @FilePath: \wx-music\src\components\theme-cover\index.js
 */
import {memo} from 'react';
import {getSizeImage,getCount} from '@/utils/format-utils'

import {ThemeCoverWrapper} from './style'

export default memo(function ThemeCover(props){
    const {info,right} = props

    return (
        <ThemeCoverWrapper right={right}>
            <div className="cover-top">
                <img src={getSizeImage(info.picUrl || info.coverImgUrl,140)} alt="" />
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
            <div className="cover-bottom text-nowrap">
                {info.name}
            </div>
            <div className="cover-source">
                by {info.copywriter || info.creator.nickname}
            </div>
        </ThemeCoverWrapper>
    )
})