/*
 * @Author: 牛皓
 * @Date: 2020-11-06 11:37:43
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-06 17:23:41
 * @FilePath: \wx-music\src\pages\discover\c-pages\recommend\c-cpns\top-banner\index.js
 */
import React,{memo , useEffect, useRef , useCallback , useState} from 'react';

import {useSelector ,useDispatch , shallowEqual } from 'react-redux';
// useSelector 获取state数据，shallowEqual 为了一个比较，主要为了优化性能

import {Carousel} from 'antd'
import {BannerWrapper,BannerLeft,BannerRight,BannerControl} from './style'
import { getTopBannerAction } from '../../store/actionCreators';

export default memo(function TopBanner(){
    // state
    const [currentIndex,setCurrentIndex] = useState(0)

    // 组件和redux关联：获取数据和进行操作
    const {topBanners} = useSelector(state =>({
        // topBanners: state.get('recommend').get('topBanners')
        // 上面一种写法的语法糖
        topBanners:state.getIn(['recommend','topBanners'])
    }),shallowEqual);
    

    //使用useRef获取banner实例
    const bannerRef = useRef()

    //发送请求
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getTopBannerAction())
    },[dispatch])

    //背景图的切换
    const bannerChange = useCallback((from,to)=>{
        setCurrentIndex(to)
    },[])

    const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl +  "?imageView&blur=40x20")
    return (
        <BannerWrapper>
            <div className="banner warp-v2">
                <BannerLeft bgImage={bgImage}>
                    <Carousel effect='fade' autoplay ref={bannerRef} beforeChange={bannerChange}>
                        {
                            topBanners.map((item,index)=>{
                                return(
                                    <div className="banner-item" key={item.imageUrl}>
                                        <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </BannerLeft>
                <BannerRight></BannerRight>
                <BannerControl>
                    <button className="btn left" onClick={e => bannerRef.current.prev() }></button>
                    <button className="btn right" onClick={e => bannerRef.current.next() }></button>
                </BannerControl>
            </div>
        </BannerWrapper>
    )
})