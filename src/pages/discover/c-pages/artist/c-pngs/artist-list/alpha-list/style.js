/*
 * @Author: 牛皓
 * @Date: 2020-11-16 16:39:49
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-17 09:44:45
 * @FilePath: \wx-music\src\pages\discover\c-pages\artist\c-pngs\artist-list\alpha-list\style.js
 */
import styled from 'styled-components';

export const AlphaListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  .item {
    padding: 1px 4px;
    border-radius: 3px;
    a {
      font-size: 14px;
      color: #333;
    }
    a:hover {
      text-decoration: underline;
    }
  }
  .active {
    background-color: #c20c0c;
    a {
      color: #fff;
    }
  }
`