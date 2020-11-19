/*
 * @Author: 牛皓
 * @Date: 2020-11-13 14:25:59
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-18 17:49:28
 * @FilePath: \wx-music\src\pages\player\index.js
 */
import React,{memo} from 'react'

import PlayerInfo from './c-cpngs/player-info'
import PlayerSongs from './c-cpngs/player-song'
import PlayerRelevant from './c-cpngs/player-relevant'

import {PlayerWrapper,PlayerLeft,PlayerRight} from './style'

export default memo(function Player(){
    return (
        <PlayerWrapper>
            <div className="content wrap-v2">
                <PlayerLeft>
                    <PlayerInfo />
                </PlayerLeft>
                <PlayerRight>
                    <PlayerSongs />
                    <PlayerRelevant />
                </PlayerRight>
            </div>
        </PlayerWrapper>
    )
})