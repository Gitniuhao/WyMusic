/*
 * @Author: 牛皓
 * @Date: 2020-11-17 11:07:42
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-17 11:07:43
 * @FilePath: \wx-music\src\components\theme-header-noraml\index.js
 */
import React,{memo} from 'react';
 import {HeaderWrapper} from './style'

 export default memo(function(props){
     const {title , rightSlot} = props

     return (
         <HeaderWrapper>
             <div className="title">{title}</div>
             <div className="right">
                 {rightSlot}
             </div>
         </HeaderWrapper>
     )
 })