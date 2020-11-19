/*
 * @Author: 牛皓
 * @Date: 2020-11-13 14:37:25
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-13 14:37:26
 * @FilePath: \wx-music\src\pages\discover\c-pages\recommend\c-cpns\hot-radio\index.js
 */
import React,{memo} from 'react'

import {hotRadios} from '@/common/local-data'

import ThemeHeaderSmall from '@/components/theme-header-small';
import {HotRadioWrapper} from './style'

export default memo(function HotRadio(){
    return (
        <HotRadioWrapper>
            <ThemeHeaderSmall title ="热门主播" />
            <div className="radio-list">
                {
                    hotRadios.map((item,index)=>{
                        return (
                            <div className="item" key={item.picUrl}>
                                <a href="/abc" className="image">
                                    <img src={item.picUrl} alt="" />
                                </a>
                                <div className='info'>
                                    <div className="name">{item.name}</div>
                                        <div className="position text-nowrap">{item.position}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </HotRadioWrapper>
    )
})