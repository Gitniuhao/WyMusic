/*
 * @Author: 牛皓
 * @Date: 2020-11-17 11:14:34
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-17 15:07:43
 * @FilePath: \wx-music\src\pages\discover\c-pages\album\c-pngs\hot-album\index.js
 */
import React,{memo,useEffect} from 'react';
import {useSelector,useDispatch,shallowEqual} from 'react-redux';
import AlbumCover from '@/components/album-cover'
import ThemeHeaderNormal from '@/components/theme-header-normal'
import {HotAlbumWrapper} from './style'

import {getHotAlbumsAction} from '../../store/actionCreators'

export default memo(function HotAlbum(){
    const {hotAlbums} = useSelector(state => ({
        hotAlbums:state.getIn(['album','hotAlbums'])
    }),shallowEqual)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getHotAlbumsAction())
    }, [dispatch])

    return (
        <HotAlbumWrapper>
            <ThemeHeaderNormal title="热门新碟" />
            <div className="album-list">
                {
                    hotAlbums.slice(0,10).map((item,index)=>{
                        return <AlbumCover 
                                    size={"130"}
                                    width={"153"}
                                    bgp={"-845px"}
                                    key={item.id}
                                    info={item}
                                />
                    })
                }
            </div>
        </HotAlbumWrapper>
    )
})
