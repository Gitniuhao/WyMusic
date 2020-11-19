/*
 * @Author: 牛皓
 * @Date: 2020-11-18 15:43:02
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-18 17:42:52
 * @FilePath: \wx-music\src\pages\discover\c-pages\djradio\c-cpngs\radio-ranking\index.js
 */
import {useEffect,useState,memo} from 'react';
import {useSelector,useDispatch,shallowEqual} from 'react-redux'

import {getRadios} from '../../store/actionCreators'

import ThemeHeaderNormal from '@/components/theme-header-normal'
import RadioRankingCover from '@/components/radio-ranking-cover'
import CustomPagination from '@/components/custom-pagination'

import {RankingWrapper} from './style'

export default memo(function RadioRanking(){
    const [currentPage,setCurrentPage] = useState(1);

    const {currentId,radios} = useSelector(state =>({
        currentId:state.getIn(['djRadio','currentId']),
        radios:state.getIn(['djRadio','radios'])
    }),shallowEqual)

    const dispatch = useDispatch()
    useEffect(()=>{
        if(currentPage === 0) return;
        dispatch(getRadios(currentId,0))
    },[dispatch,currentId])

    const onPageChange = (page,pageSize) => {
        setCurrentPage(page)
        dispatch(getRadios(currentId,page * 30))
    }

    return (
        <RankingWrapper>
            <ThemeHeaderNormal title="电台排行榜" />
            <div className="ranking-list">
                {
                    radios.map((item,index)=>{
                        return (<RadioRankingCover key={item.id} radio={item} /> )
                    })
                }
            </div>
            <CustomPagination 
                currentPage={currentPage}
                total={1000}
                pageSize={30}
                onPageChange={onPageChange}    
            />
        </RankingWrapper>
    )
})