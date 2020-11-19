/*
 * @Author: 牛皓
 * @Date: 2020-11-18 17:29:29
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-18 17:29:29
 * @FilePath: \wx-music\src\components\radio-recommend-cover\index.js
 */
import {memo} from 'react';
import {getSizeImage} from '@/utils/format-utils'

import {CoverWrapper} from './style'

export default memo(function RadioRecommendCover(props){
    const {info} = props
    return (
        <CoverWrapper>
            <a href="/#">
                <img src={getSizeImage(info.picUrl,150)} alt="" />
            </a>
            <a href="/#" className="text-nowrap name">{info.name}</a>
            <p className="text-nowrap">{info.desc}</p>
        </CoverWrapper>
    )
})