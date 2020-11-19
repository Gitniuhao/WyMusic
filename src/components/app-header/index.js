/*
 * @Author: 牛皓
 * @Date: 2020-11-04 17:09:25
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-05 10:05:54
 * @FilePath: \wx-music\src\components\app-header\index.js
 */
import React,{memo} from 'react'
import {HeaderLinks} from '@/common/local-data'

import { NavLink } from 'react-router-dom';
import {SearchOutlined} from '@ant-design/icons'
import {Input} from 'antd'

import {HeaderWrapper,HeaderLeft,HeaderRight} from './style'

export default memo(function AppHeader(){
    const showSelectItem = (item,index) =>{
        if(index<3){
            return (
                <NavLink to={item.link} exact>
                    {item.title}
                    <i className="sprite_01 icon"></i>
                </NavLink>
            )
        }else{
            return <a href={item.link}>{item.title}</a>
        }
    }

    return (
        <HeaderWrapper>
            <div className="content wrap-v1">
                <HeaderLeft>
                    <a href="#/" className="logo sprite_01">网抑云音乐</a>
                    <div className="select-list">
                        {
                            HeaderLinks.map((item,index)=>{
                                return (
                                    <div key={item.title} className="select-item">
                                        {showSelectItem(item,index)}
                                    </div>
                                )
                            })
                        }
                    </div>
                </HeaderLeft>
                <HeaderRight>
                    <Input 
                        className="search"
                        placeholder="音乐/视频/电台/用户"
                        prefix={<SearchOutlined />}
                    />
                    <div className="center">创作者中心</div>
                    <div>登录</div>
                </HeaderRight>
            </div>
            <div className="divider"></div>
        </HeaderWrapper>
    )
})