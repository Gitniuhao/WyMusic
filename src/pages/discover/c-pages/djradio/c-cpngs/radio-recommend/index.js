/*
 * @Author: 牛皓
 * @Date: 2020-11-18 16:15:40
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-18 17:40:14
 * @FilePath: \wx-music\src\pages\discover\c-pages\djradio\c-cpngs\radio-recommend\index.js
 */
import React,{useEffect,memo} from 'react';
import {useSelector,useDispatch,shallowEqual} from 'react-redux'

import {getRadioRecommend} from '../../store/actionCreators'

import ThemeHeaderNormal from '@/components/theme-header-normal'
import RadioRecommendCover from '@/components/radio-recommend-cover'

import {RecommendWrapper} from './style'

export default memo(function RadioRecommend(){
    const {currentId,recommends} = useSelector(state => ({
        currentId:state.getIn(['djRadio','currentId']),
        recommends:state.getIn(['djRadio','recommends'])
    }),shallowEqual)

    const dispatch = useDispatch()
    useEffect(() => {
        if(currentId === 0) return;
         dispatch(getRadioRecommend(currentId))
    }, [currentId,dispatch])

    return (
        <RecommendWrapper>
            <ThemeHeaderNormal title="优秀新电台" />
            <div className="radio-list" >
                {
                    recommends.slice(0,5).map((item)=>{
                        return (<RadioRecommendCover info={item} key={item.id} />)
                    })
                }
            </div>
        </RecommendWrapper>
    )
})
