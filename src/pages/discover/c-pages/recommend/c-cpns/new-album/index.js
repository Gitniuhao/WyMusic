/*
 * @Author: 牛皓
 * @Date: 2020-11-09 09:19:54
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-09 10:10:14
 * @FilePath: \wx-music\src\pages\discover\c-pages\recommend\c-cpns\new-album\index.js
 */
import React,{memo,useEffect,useRef} from 'react'
import {useDispatch,useSelector,shallowEqual} from 'react-redux'

import {getNewAlbumAction} from '../../store/actionCreators';
import {Carousel} from 'antd';

import AlbumCover from '@/components/album-cover'
import ThemeHeaderRCM from '@/components/theme-header-rcm'
import {AlbumWrapper} from './style';

export default memo(function NewAlbum(){
    //从redux的store中获取数据
    const {newAlbums} = useSelector(state =>({
        newAlbums:state.getIn(['recommend','newAlbums'])
    }),shallowEqual)

    //向后台发送请求
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getNewAlbumAction(10))
    },[dispatch])

    // 使用useRef获取实例对象
    const pageRef = useRef();

    return (
        <AlbumWrapper>
            <ThemeHeaderRCM title="新碟上架" />
            <div className="content">
                <button className="arrow arrow-left sprite_02" onClick={e => pageRef.current.prev()}></button>
                <div className="album">
                    <Carousel dots={false} ref={pageRef}>
                        {
                            [0,1].map(item =>{
                                return (
                                    <div key={item} className="page">{/*使用slice处理，一次展示5条，第一次0到5条，第二次5到10条 */}
                                        {
                                            newAlbums.slice(item * 5 ,(item +1) * 5).map(iten =>{
                                                return <AlbumCover key={iten.id}
                                                                   info={iten}
                                                                   size={100}
                                                                   width={118}
                                                                   bgp="-570px"
                                                        />
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
                <button className="arrow arrow-right sprite_02" onClick={e => pageRef.current.next()}></button>
            </div>
        </AlbumWrapper>
    )
})