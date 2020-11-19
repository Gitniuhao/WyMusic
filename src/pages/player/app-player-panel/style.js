/*
 * @Author: 牛皓
 * @Date: 2020-11-12 15:19:03
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-12 17:11:58
 * @FilePath: \wx-music\src\pages\player\app-player-panel\style.js
 */
import styled from 'styled-components'

export const PanelWrapper = styled.div`
    position:absolute;
    left:50%;
    bottom:46px;
    transform:translateX(-50%);
    width:986px;
    height:301px;
    color:#2e2e2e;

    .main{
        position:relative;
        display:flex;
        height:260px;
        overflow:hidden;
        background:url(${require('@/assets/img/playpanel_bg.png').default}) -1014px 0 repeat-y;

        .image{
            position:absolute;
            left:2px;
            top:-360px;
            width:980px;
            height:auto;
            opacity:.2;
        }
    }
`
