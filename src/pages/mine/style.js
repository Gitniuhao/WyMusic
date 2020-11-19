/*
 * @Author: 牛皓
 * @Date: 2020-11-19 09:29:44
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-19 09:30:44
 * @FilePath: \wx-music\src\pages\mine\style.js
 */
import styled from 'styled-components'

export const MineWrapper = styled.div`
.content {
    background-color: #fff;
    min-height: 700px;
    .pic {
      position: relative;
      width: 807px;
      height: 484px;
      margin: 0 auto;
      background: url(${require("@/assets/img/friend_sprite.jpg")}) 0 104px no-repeat;
      .login {
        position: absolute;
        width: 167px;
        height: 45px;
        left: 482px;
        top: 368px;
        text-indent: -9999px;
      }
    }
  }
`