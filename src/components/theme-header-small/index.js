/*
 * @Author: 牛皓
 * @Date: 2020-11-13 14:52:33
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-13 15:04:27
 * @FilePath: \wx-music\src\components\theme-header-small\index.js
 */
import React,{memo} from 'react'
import PropTypes from 'prop-types'

import {HeaderWrapper} from './style'

const ThemeHeaderSmall = memo(function(props){
    const {title,more} = props;

    return (
        <HeaderWrapper>
            <h3>{title}</h3>
            <a href="/abc">{more}</a>
        </HeaderWrapper>
    )
}) 

ThemeHeaderSmall.propsTypes = {
    title:PropTypes.string.isRequired,
    more:PropTypes.string
}

export default ThemeHeaderSmall;