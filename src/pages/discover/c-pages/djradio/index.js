/*
 * @Author: 牛皓
 * @Date: 2020-11-04 17:47:57
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-04 17:49:20
 * @FilePath: \wx-music\src\pages\discover\c-pages\djradio\index.js
 */
import React,{memo} from 'react';//memo 组件仅在它的 props 发生改变时进行重新渲染

import RadioCategory from './c-cpngs/radio-category';
import RadioRecommend from './c-cpngs/radio-recommend'
import RadioRanking from './c-cpngs/radio-ranking'
import {DjRadioWrapper} from './style'
export default memo(function Djradio(){
    return (
        <DjRadioWrapper className="wrap-v2">
            <RadioCategory />
            <RadioRecommend />
            <RadioRanking />
        </DjRadioWrapper>
    )
})