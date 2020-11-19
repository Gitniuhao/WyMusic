/*
 * @Author: 牛皓
 * @Date: 2020-11-16 16:39:33
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-18 09:22:57
 * @FilePath: \wx-music\src\pages\discover\c-pages\artist\c-pngs\artist-list\alpha-list\index.js
 */
import React,{memo,useState,useEffect} from 'react'
import classNames from 'classNames'

import {singerAlphas} from '@/utils/handle-date';
import {AlphaListWrapper} from './style'

export default memo(function AlphaList(){
    
    const [currentAlpha,setCurrentAlpha] = useState('-1');
    // useEffect(()=>{
    //     console.log(singerAlphas,'singerAlphas')
    // },[])
    return (
        <AlphaListWrapper>
            {
                singerAlphas.map((item,index)=>{
                    const isActive = currentAlpha === item;
                    if(item === '0') item = '其他';
                    if(item === '-1') item = '热门';
                    return (
                        <div key={item} className={classNames("item",{"active":isActive})}>{/*使用插件classnames进行动态添加属性*/}
                            <a href="/#" onClick={e => setCurrentAlpha(item)}>{item.toUpperCase()}</a>
                        </div>
                    )
                })
            }
        </AlphaListWrapper>
    )
})