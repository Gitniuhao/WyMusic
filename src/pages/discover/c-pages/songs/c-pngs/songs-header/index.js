/*
 * @Author: 牛皓
 * @Date: 2020-11-17 16:40:11
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-17 16:50:18
 * @FilePath: \wx-music\src\pages\discover\c-pages\songs\c-pngs\songs-header\index.js
 */
import {useState,memo} from 'react'
import {useSelector,shallowEqual} from 'react-redux'

import SongCategory from '../songs-category'
import {
    HeaderWrapper,
    HeaderLeft,
    HeaderRight
}   from './style'

export default memo(function SongHeader(){
    const [showCategory,setShowCategory] = useState(false);

    const {currentCategory} = useSelector(state =>({
        currentCategory:state.getIn(['songs','currentCategory'])
    }),shallowEqual)

    return (
        <HeaderWrapper>
            <HeaderLeft>
                <span className="title">{currentCategory}</span>
                <button className="select" onClick={e => setShowCategory(!showCategory)}>
                    <span>选择分类</span>
                    <i className="sprite_icon2"></i>
                </button>
                {showCategory ? <SongCategory /> : null}
            </HeaderLeft>
            <HeaderRight>
                <button className="hot">热门</button>
            </HeaderRight>
        </HeaderWrapper>
    )
})