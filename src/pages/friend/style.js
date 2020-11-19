/*
 * @Author: 牛皓
 * @Date: 2020-11-19 09:24:14
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-19 09:33:10
 * @FilePath: \wx-music\src\pages\friend\style.js
 */
import styled from 'styled-components';

export const FriendWrapper = styled.div`
    .content {
        background-color:#fff;
        min-height:700px;

        .pic{
            position:relative;
            width:807px;
            height:45px;
            margin:0 auto;
            background:url(${require("@/assets/img/friend_sprite.jpg")}) 0 104px no-repeat;

            .login{
                position:absolute;
                width:167px;
                height:45px;
                left:482px;
                top:368px;
                text-indent:-999px;
            }
        }
    }
`