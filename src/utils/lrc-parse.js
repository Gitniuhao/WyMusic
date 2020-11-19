/*
 * @Author: 牛皓
 * @Date: 2020-11-11 18:01:10
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-11 18:08:36
 * @FilePath: \wx-music\src\utils\lrc-parse.js
 */
const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/

export function parseLyric(lyricString){
    const lineStrings = lyricString.split("\n");
    const lyrics = [];
    for(let line of lineStrings){
        if(line){
            const lrcContent = line.replace(parseExp,'').trim();
            const timeResult = parseExp.exec(line);
            const milliseconds = timeResult[3].length === 3 ? timeResult[3] * 1 : timeResult[3] * 10
            const lrcTime =   timeResult[1] * 60 * 1000 + timeResult[2] * 1000 + milliseconds;
            lyrics.push({
                content:lrcContent,
                time:lrcTime
            })
        }
    }
    return lyrics;
}