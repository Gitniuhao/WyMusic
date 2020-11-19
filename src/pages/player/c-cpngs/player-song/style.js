/*
 * @Author: 牛皓
 * @Date: 2020-11-13 13:39:29
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-13 15:00:49
 * @FilePath: \wx-music\src\pages\player\c-cpngs\player-song\style.js
 */
import styled from 'styled-components'

export const PlaySongWrapper = styled.div`
        .songs{
          .song-item{
             display:flex;
             align-items:center;
             margin-top:15px;
             width:200px;
                .image{
                    width:50px;
                    height:50px;
                }
                .info{
                    margin-left:10px;
                    color:#000;

                    .name{
                        font-size:14px;
                        color:#000;
                    }

                    .auchor{
                        color:#999;
    
                        .nickname{
                            color:#666;
                            margin-left:5px;
                        }
                    }
                }               
            }
        }
`