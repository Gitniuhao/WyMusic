/*
 * @Author: 牛皓
 * @Date: 2020-11-17 16:50:58
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-17 17:49:21
 * @FilePath: \wx-music\src\pages\discover\c-pages\songs\c-pngs\songs-list\index.js
 */
import {memo,useState} from 'react';
import {useSelector,useDispatch,shallowEqual} from 'react-redux'

import { PER_PAGE_NUMBER } from '../../store/constants'
import {getSongList} from '../../store/actionCreators'

import ThemeCover from '@/components/theme-cover'
import CustomPagination from '@/components/custom-pagination'
import {
    SongListWrapper
} from './style'

export default memo(function SongsList(){
    const [currentPage,setCurrentPage] = useState(1);

    const {categorySongs} = useSelector(state =>({
        categorySongs:state.getIn(['songs','categorySongs'])
    }),shallowEqual)

    const songList = categorySongs.playlists || [];
    const total = categorySongs.total || 0;

     const dispatch = useDispatch()
     function onPageChange(page,pageSize){
         setCurrentPage(page)
         dispatch(getSongList(page))
     }

     return (
         <SongListWrapper>
             <div className="songs-list">
                 {
                     songList.map((item,index)=>{
                         return (
                             <ThemeCover info={item} key={item.id} right="30px" />
                         )
                     })
                 }
             </div>
             <CustomPagination 
                currentPage={currentPage}
                total={total}
                pageSize={PER_PAGE_NUMBER}
                onPageChange={onPageChange}
             />
         </SongListWrapper>
     )
})