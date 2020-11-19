/*
 * @Author: 牛皓
 * @Date: 2020-11-04 17:47:57
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-16 14:16:37
 * @FilePath: \wx-music\src\pages\discover\c-pages\ranking\index.js
 */
import React,{memo,useEffect} from 'react';//memo 组件仅在它的 props 发生改变时进行重新渲染
import {useDispatch} from 'react-redux'

import TopRanking from './c-cpns/top-ranking'
import RankingHeader from './c-cpns/ranking-header'
import RankingList from './c-cpns/ranking-list'

import {RankingWrapper,RankingLeft,RankingRight} from './style'
import {getTops} from './store/actionCreators'

export default memo(function Ranking(){
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getTops())
    },[dispatch])
    return (
        <RankingWrapper className="wrap-v2">
            <RankingLeft>
                <TopRanking />
            </RankingLeft>
            <RankingRight>
                <RankingHeader />
                <RankingList />
            </RankingRight>
        </RankingWrapper>
    )
})