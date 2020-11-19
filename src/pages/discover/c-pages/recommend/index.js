/*
 * @Author: 牛皓
 * @Date: 2020-11-04 17:47:57
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-13 16:57:55
 * @FilePath: \wx-music\src\pages\discover\c-pages\recommend\index.js
 */
import React,{memo} from 'react';//memo 组件仅在它的 props 发生改变时进行重新渲染
import TopBanner from './c-cpns/top-banner'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbums from './c-cpns/new-album'
import RecommendRanking from './c-cpns/recommend-ranking'
import HotRadio from './c-cpns/hot-radio'
import SettleSinger from './c-cpns/settle-singer'
import UserLogin from './c-cpns/user-login'

import {
    RecommendWrapper,
    Content,
    RecommendLeft,
    RecommendRight
  } from "./style";

export default memo(function Recommend(){
    return (
        <RecommendWrapper>
            <TopBanner />
            <Content classNam="wrap-v2">
                <RecommendLeft>
                    <HotRecommend />
                    <NewAlbums />
                    <RecommendRanking />
                </RecommendLeft>
                <RecommendRight>
                    <UserLogin />
                    <SettleSinger />
                    <HotRadio />
                </RecommendRight>
            </Content>
        </RecommendWrapper>           
    )
})
