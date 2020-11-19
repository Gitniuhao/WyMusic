/*
 * @Author: 牛皓
 * @Date: 2020-11-06 15:43:58
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-06 16:32:35
 * @FilePath: \wx-music\src\pages\discover\c-pages\recommend\c-cpns\hot-recommend\index.js
 */
import React,{memo,useEffect} from 'react'
import {useSelector , useDispatch , shallowEqual} from 'react-redux'

import ThemeHeaderRCM from "@/components/theme-header-rcm";
import SongsCover from "@/components/songs-cover";
import {HotRecommendWrapper} from './style'
import {getHotRecommendAction} from '../../store/actionCreators'

export default memo(function HotRecommend(){
    //state,redux hooks,
    const {hotRecommends} = useSelector(state =>({
        hotRecommends:state.getIn(['recommend','hotRecommends'])
    }),shallowEqual)

    //发送请求
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getHotRecommendAction(8))
    },[dispatch])

    return (
        <HotRecommendWrapper>
          <ThemeHeaderRCM title="热门推荐" keywords={["华语", "流行", "民谣", "摇滚", "电子"]} />
          <div className="recommend-list">
            {
              hotRecommends.map((item, index) => {
                return <SongsCover key={item.id} info={item}/>
              })
            }
          </div>
        </HotRecommendWrapper>
      )
})