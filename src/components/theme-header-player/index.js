/*
 * @Author: 牛皓
 * @Date: 2020-11-13 13:40:26
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-13 13:44:54
 * @FilePath: \wx-music\src\components\themem-header-player\index.js
 */
import React,{memo} from 'react'
import {HeaderWrapper} from './style'

export default memo(function ThemeHeaderPlayer(props){
    const {title} = props;

    return (
        <HeaderWrapper>
            <h3>{title}</h3>
        </HeaderWrapper>
    )
})