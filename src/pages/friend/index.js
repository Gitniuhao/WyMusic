/*
 * @Author: 牛皓
 * @Date: 2020-11-04 16:45:20
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-04 16:45:42
 * @FilePath: \wx-music\src\pages\friend\index.js
 */
import React,{memo} from 'react';
import {FriendWrapper} from './style'

export default memo(function Friend(){
    return (
        <FriendWrapper>
            <div className="content wrap-v2">
                <div className="pic">
                    <a className="login" href="/#">立即登录</a>
                </div>
            </div>
        </FriendWrapper>
    )
})