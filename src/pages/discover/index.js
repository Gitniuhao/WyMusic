/*
 * @Author: 牛皓
 * @Date: 2020-11-04 16:44:00
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-05 11:12:25
 * @FilePath: \wx-music\src\pages\discover\index.js
 */
import React,{memo} from 'react';//memo 组件仅在它的 props 发生改变时进行重新渲染
//子路由渲染
import {renderRoutes} from 'react-router-config';
import {discoverMenu} from '@/common/local-data.js'
import {NavLink} from 'react-router-dom'

import { DiscoverWrapper , TopMenu} from './style';

export default memo(function Discover(props){
    //子路由渲染
    const { route } = props;
    return (
        <DiscoverWrapper>
            <div className="top">
                <TopMenu className="wrap-v1">
                    {
                        discoverMenu.map((item,index)=>{
                            return (
                                <div className="item" key={item.title}>
                                      <NavLink to={item.link}>{item.title}</NavLink>  
                                </div>
                            )
                        })
                    }
                </TopMenu>
            </div>
            {renderRoutes(route.routes)}
        </DiscoverWrapper>
    )
})