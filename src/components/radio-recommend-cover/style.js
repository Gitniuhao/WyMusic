/*
 * @Author: 牛皓
 * @Date: 2020-11-18 17:29:36
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-18 17:34:50
 * @FilePath: \wx-music\src\components\radio-recommend-cover\style.js
 */
import styled from 'styled-components';

export const CoverWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  .name {
    font-size: 14px;
    color: #333;
    margin: 5px 0;
  }
  img {
    width: 150px;
    height: 150px;
  }
  p {
    color: #666;
  }
`