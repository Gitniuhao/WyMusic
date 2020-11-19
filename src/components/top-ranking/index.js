/*
 * @Author: 牛皓
 * @Date: 2020-11-09 14:42:38
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-16 10:10:45
 * @FilePath: \wx-music\src\components\top-ranking\index.js
 */
import React,{memo} from 'react';
import {getSizeImage} from '@/utils/format-utils';
import {TopRankingWrapper} from './style'

export default memo(function TopRanking(props){
    const {info} = props;
    // const {tracks =[]} = info;
    const tracks = (info.tracks && info.tracks.slice(0, 10)) || [];
    
    return (
        <TopRankingWrapper>
            <div className='header'>
                <div className='image'>
                    <img src={getSizeImage(info.coverImgUrl)} alt="" />
                    <a href="/todo" className="image_cover">ranking</a>
                </div>
                <div className="info">
                    <a href="/todo">{info.name}</a>
                    <div>
                        <button className="btn play sprite_02"></button>
                        <button className="btn favor sprite_02"></button>
                    </div>
                </div>
            </div>
            <div className="list">
                {
                    tracks.slice(0,10).map((item,index) => {
                        return (
                            <div key={item.id} className="list-item">
                                <div className="rank">{index + 1}</div>
                                <div className="info">
                                    <span className="name text-nowrap">{item.name}</span>
                                    <div className="operate">
                                        <button className="btn sprite_02 play"></button>
                                        <button className="btn sprite_icon addto"></button>
                                        <button className="btn sprite_02 favor"></button>
                                    </div>
                                </div>
                            </div> 
                        )
                    })
                }
            </div>
            <div className="footer">
                <a href="/todo">查看全部 &gt;</a>
            </div>
        </TopRankingWrapper>
    )
})

