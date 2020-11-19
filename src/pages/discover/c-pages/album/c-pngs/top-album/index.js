/*
 * @Author: 牛皓
 * @Date: 2020-11-17 11:35:27
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-17 15:52:31
 * @FilePath: \wx-music\src\pages\discover\c-pages\album\c-pngs\top-album\index.js
 */
import React,{memo,useEffect,useState} from 'react';
import {useSelector,useDispatch,shallowEqual} from 'react-redux'

import {getTopAlbumsAction} from '../../store/actionCreators'
import AlbumCover from '@/components/album-cover'
import ThemeHeaderNormal from '@/components/theme-header-normal'
import CustomPagination from '@/components/custom-pagination'
import {TopAlbumWrapper} from './style'

function TopAlbum(props) {
    const [currentPage,setCurrentPage] = useState(1);

    const {topAlbums,topTotal} = useSelector(state =>({
        topAlbums:state.getIn(['album','topAlbums']),
        topTotal:state.getIn(['album','topTotal'])
    }),shallowEqual)

    const dispatch = useDispatch()
    useEffect(() => {//初始化时页码为1
        dispatch(getTopAlbumsAction(1))
    }, [dispatch])

    const onPageChange = (page,pageSize) =>{//在页面变化的时候根据页面重新发送dispatch
        setCurrentPage(page);
        dispatch(getTopAlbumsAction(page))
    }

    return (
       <TopAlbumWrapper>
           <ThemeHeaderNormal title="全部新碟" />
           <div className="album-list">
               {
                   topAlbums.map((item,index)=>{
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
           <CustomPagination 
                currentPage={currentPage}
                total={topTotal}
                pageSize={30}
                onPageChange={onPageChange}
           />
       </TopAlbumWrapper>
    );
}

export default memo(TopAlbum);