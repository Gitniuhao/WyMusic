/*
 * @Author: 牛皓
 * @Date: 2020-11-04 16:45:23
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-19 09:31:21
 * @FilePath: \wx-music\src\pages\mine\index.js
 */
import React,{memo} from 'react';
import {MineWrapper} from './style'

export default memo(function Mine(){
    return (
            <MineWrapper>
                <div className="content wrap-v2">
                    <div className="pic">
                        <a className="login" href="/#">立即登录</a>
                    </div>
                </div>
            </MineWrapper>
    )
})