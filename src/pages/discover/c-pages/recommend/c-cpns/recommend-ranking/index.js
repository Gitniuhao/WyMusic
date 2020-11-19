/*
 * @Author: 牛皓
 * @Date: 2020-11-09 14:37:53
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-09 16:33:43
 * @FilePath: \wx-music\src\pages\discover\c-pages\recommend\c-cpns\recommend-ranking\index.js
 */
import React,{memo,useEffect} from 'react';
import {useDispatch , useSelector , shallowEqual} from 'react-redux';

import ThemeHeaderRCM from '@/components/theme-header-rcm'
import TopRanking from '@/components/top-ranking'
import {RankingWrapper} from './style'
import {getTopListAction} from '../../store/actionCreators';

export default memo(function RecommendRanking(){
     // redux hooks
  const { upRanking, newRanking, originRanking } = useSelector(state => ({
    upRanking: state.getIn(["recommend", "upRanking"]),
    newRanking: state.getIn(["recommend", "newRanking"]),
    originRanking: state.getIn(["recommend", "originRanking"]),
  }), shallowEqual);
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getTopListAction(0));
    dispatch(getTopListAction(2));
    dispatch(getTopListAction(3));
  }, [dispatch]);

    return (
        <RankingWrapper>
            <ThemeHeaderRCM title="榜单" />
                <div className="tops">
                    <TopRanking info={upRanking} />
                    <TopRanking info={newRanking} />
                    <TopRanking info={originRanking} />
                </div>
        </RankingWrapper>
    )
})