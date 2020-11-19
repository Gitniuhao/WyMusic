/*
 * @Author: 牛皓
 * @Date: 2020-11-18 15:55:55
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-18 16:15:07
 * @FilePath: \wx-music\src\components\radio-ranking-cover\style.js
 */
  
import styled from 'styled-components';

export const CoverWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 48%;
  padding: 20px 0;
  border-bottom: 1px solid #e7e7e7;
  img {
    width: 120px;
    height: 120px;
  }
  .info {
    margin-left: 20px;
    .nickname {
      margin-top: 15px;
      color: #000;
      i.left {
        display: inline-block;
        position: relative;
        top: 2px;
        width: 14px;
        height: 15px;
        margin-right: 2px;
        background-position: -50px -300px;
      }
    }
    .count {
      color: #666;
      margin-top: 5px;
      .subscribe {
        margin-left: 10px;
      }
    }
  }
`