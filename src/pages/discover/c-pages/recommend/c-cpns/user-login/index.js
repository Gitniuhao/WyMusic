/*
 * @Author: 牛皓
 * @Date: 2020-11-13 16:35:36
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-13 16:38:17
 * @FilePath: \wx-music\src\pages\discover\c-pages\recommend\c-cpns\user-login\index.js
 */
import React,{memo} from 'react'
import {UserLoginWrapper} from './style';

export default memo(function UserLogin(){
    return (
        <UserLoginWrapper className="sprite_02">
            <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
            <a href='/login' className="sprite_02">用户登录</a>
        </UserLoginWrapper>
    )
})