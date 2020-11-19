/*
 * @Author: 牛皓
 * @Date: 2020-11-06 15:50:52
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-09 10:35:21
 * @FilePath: \wx-music\src\components\theme-header-rcm\index.js
 */
import React,{memo} from 'react'
import propTypes from 'prop-types'

import {HeaderWrapper} from './style'

const ThemeHeaderRCM = memo(function(props){
    const {title , keywords} = props

    return (
        <HeaderWrapper className="sprite_02">
            <div className="left">
                <h3 className="title">{title}</h3>
                <div className="keyword">
                {
                    keywords.map((item) => {
                    return (
                        <div className="item" key={item}>
                        <a href="/todo">{item}</a>
                        <span className="divider">|</span>
                        </div>
                    )
                    })
                }
                </div>
            </div>
            <div className="right">
                <a href="todo">更多</a>
                <i className="icon sprite_02"></i>
            </div>
        </HeaderWrapper>
    )
})

ThemeHeaderRCM.propTypes = {
    title:propTypes.string.isRequired,
    keywords:propTypes.array
}

ThemeHeaderRCM.defaultProps = {
    keywords:[]
}

export default ThemeHeaderRCM;