/*
 * @Author: 牛皓
 * @Date: 2020-11-13 15:43:10
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-16 16:23:51
 * @FilePath: \wx-music\src\pages\discover\c-pages\recommend\c-cpns\settle-singer\index.js
 */
import React,{useEffect,memo} from 'react';
import {useDispatch,useSelector,shallowEqual} from 'react-redux'

import {getSizeImage} from '@/utils/format-utils'
import ThemeHeaderSmall from '@/components/theme-header-small'
import {SetterSongerWrapper} from './style'

import {getSettleSingers} from '../../store/actionCreators'

export default memo(function SettleSinger(){
    const state = useSelector(state =>({
        settleSings:state.getIn(['recommend','settleSings'])
    }),shallowEqual);

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getSettleSingers())
    })

    return (
        <SetterSongerWrapper>
            <ThemeHeaderSmall title="入驻歌手" more="查看全部" />
            <div className="singer-list">
                {
                    state.settleSings.map((item,index)=>{
                        return (
                            <a href="/singers" key={item.id} className="item">
                                <img src={getSizeImage(item.img1v1Url,62)} alt="" />
                                <div className="info">
                                    <div className="title">{item.alias.join("") || item.name}</div>
                                    <div className="name">{item.name}</div>
                                </div>
                            </a>
                        )
                    })
                }
            </div>
            <div className="apply-for">
                <a href="/abc">申请成为网易音乐人</a>
            </div>
        </SetterSongerWrapper>
    )
})
