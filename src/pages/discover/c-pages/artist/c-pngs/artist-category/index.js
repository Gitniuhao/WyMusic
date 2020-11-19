/*
 * @Author: 牛皓
 * @Date: 2020-11-16 15:05:11
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-17 10:37:59
 * @FilePath: \wx-music\src\pages\discover\c-pages\artist\c-pngs\artist-category\index.js
 */
import React,{memo} from 'react';
import {useDispatch,useSelector,shallowEqual} from 'react-redux'
import classNames from 'classNames'

import {artistCategories} from '@/common/local-data.js';
import {changeCurrentAreaAction,changeCurrentTypeAction} from '../../store/actionCreators'

import {CategoryWrapper,CategoryItem} from './style'

export default memo(function ArtistCategory(props){
    const {currentArea,currentType} = useSelector(state =>({
        currentArea:state.getIn(['artist','currentArea']),
        currentType:state.getIn(['artist','currentType']),
    }),shallowEqual);

    const dispatch = useDispatch();
    const selectArtist = (area,type)=>{
        dispatch(changeCurrentAreaAction(area));
        dispatch(changeCurrentTypeAction(type));
    }

    const renderArtist = (artists,area) =>{
        return (
            <div>
                {
                    artists.map((item,index) =>{
                        const isSelect = currentArea === area && currentType.type === item.type;
                        return (
                            <CategoryItem key={item.name}
                                          className={classNames({"active":isSelect})} >
                                <span onClick={e => selectArtist(area,item)}>{item.name}</span>
                            </CategoryItem>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <CategoryWrapper>
            {
                artistCategories.map((item,index)=>{
                    return (
                        <div className="section" key={item.area}>
                            <h2 className="title">{item.title}</h2>
                            {renderArtist(item.artists,item.area)}
                        </div>                        
                    )
                })
            }
        </CategoryWrapper>
    )
})
