/*
 * @Author: 牛皓
 * @Date: 2020-11-12 16:37:57
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-12 17:43:28
 * @FilePath: \wx-music\src\pages\player\app-player-panel\c-pngs\lyric-panel\style.js
 */
import styled from 'styled-components'

export const PanelWrapper = styled.div`
    position:relative;
    flex:1;
    margin:21px 0 20px 0;
    overflow:scroll;

    &::-webkit-scrollbar {
        display:none;
    }

    .lrc-content{
        .lrc-item{
            height:32px;
            text-align:center;
            color:#989898;
        }

        &.active{
            color:#fff;
            font-size:14px;
        }
    }
`