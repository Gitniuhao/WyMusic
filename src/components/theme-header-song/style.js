/*
 * @Author: 牛皓
 * @Date: 2020-11-16 14:00:25
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-16 14:11:09
 * @FilePath: \wx-music\src\components\theme-header-song\style.js
 */
import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-bottom:5px;
    border-bottom:2px solid #c20c0c;

    .left{
        display:flex;
        align-items:flex-end;

        .title {
            font-size:20px;
            font-family:"Microsoft Yahei",Arial,Helvetica,sans-serif;
        }

        .count {
            margin-bottom:5px;
            margin-left:20px;
        }
    }

    .right{
        .count {
            color:#c20c0c;
        }
    }
`