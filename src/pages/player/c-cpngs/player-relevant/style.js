/*
 * @Author: 牛皓
 * @Date: 2020-11-13 11:09:05
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-13 11:31:12
 * @FilePath: \wx-music\src\pages\player\c-cpngs\player-relevant\style.js
 */
import styled from 'styled-components'

export const RelevantWrapper = styled.div`
    margin-top:40px;

    .songs{
        .song-item{
            display:flex;
            justify-content:center;
            align-items:center;
            margin-bottom:12px;

            .info{
                .title{
                    a{
                        color:#666;
                    }
                }

                .artist{
                    a{
                        color:#999;
                    }
                }
            }

            .operate{
                .item{
                    display:inline-block;
                    width:10px;
                    height:11px;
                }

                .play{
                    background-position:-69px -445px;
                    margin-right:10px;
                }

                .add{
                    background-position:-87px -454px;
                }
            }
        }
    }
`