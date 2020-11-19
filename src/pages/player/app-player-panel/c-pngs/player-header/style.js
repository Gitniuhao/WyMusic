/*
 * @Author: 牛皓
 * @Date: 2020-11-12 15:23:15
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-12 15:40:43
 * @FilePath: \wx-music\src\pages\player\app-player-panel\c-pngs\player-header\style.js
 */
import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    display:flex;
    height:41px;
    line-height:41px;
    background:url(${require('@/assets/img/playpanel_bg.png').default}) 0 0;
`

export const HeaderLeft = styled.div`
    display:flex;
    justify:space-between;
    width:553px;
    padding:0 25px;

    h3{
        color:#e2e2e2;
        font-weight: 700;
    }

    .operator {
        color:#ccc;

        button{
            background-color:transparent;
            color:#ccc;
        }

        .icon {
            display:inline-block;
            width:16px;
            height:16px;
            position:relative;
            top:4px;
            right:2px;
        }

        .favor{
            background-position:-24px 0;
        }

        .remove{
            width:13px;
            background-position:-51px 0;
        }
    }
`

export const HeaderRight = styled.div`
    flex:1;
    text-align:center;
    color:#fff;
    font-size:14px;
`