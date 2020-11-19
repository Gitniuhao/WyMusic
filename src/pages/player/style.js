/*
 * @Author: 牛皓
 * @Date: 2020-11-13 14:26:15
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-13 15:41:01
 * @FilePath: \wx-music\src\pages\player\style.js
 */
import styled from 'styled-components'

export const PlayerWrapper = styled.div`
    .content{
        background:url(${require('@/assets/img/wrap-bg.png').default}) repeat-y;
        background-color:#fff;
        display:flex;
    }
`

export const PlayerLeft = styled.div`
    width:710px;
`

export const PlayerRight = styled.div`
    width:270px;
    padding:20px 40px 40px 30px
`