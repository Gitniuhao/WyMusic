/*
 * @Author: 牛皓
 * @Date: 2020-11-06 16:13:27
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-10 15:36:12
 * @FilePath: \wx-music\src\utils\format-utils.js
 */

export function getCount(count){//就是相当于一个过滤器，当我们数字过长，比如让它除以1万，然后它后面就跟上个万，依次类推
    if(count < 0) return;
    if(count < 1000){
        return count;
    }else if(Math.floor(count / 1000) < 1000){
        return Math.floor(count / 1000) / 10 + '万'
    }else{
        return Math.floor(count / 10000000) / 10 + '亿'
    }
}

export function getSizeImage(imgUrl,size){
    return `${imgUrl}?param = ${size}x${size}`;
}

export function formatDate(time,fmt){
    let date = new Date(time)

    if(/(y+)/.test(fmt)){
        fmt = fmt.replace(RegExp.$1 , (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }

    let o = {
        "M+" : date.getMonth() + 1,
        "d+" : date.getDate(),
        "h+" : date.getHours(),
        "m+" : date.getMinutes(),
        "s+" : date.getSeconds()
    };

    for(let k in o){
        if(new RegExp(`(${k})`).test(fmt)){
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1 , (RegExp.$1.length === 1) ? str : padLeftZero(str))
        }
    }

    return fmt;
}

function padLeftZero(str){
    return ('00' + str).substr(str.length);
}

export function formatMonthDay(time){
    return formatDate(time,'MM月dd日')
}

export function formatMinuteSeconds(time){
    return formatDate(time,'mm:ss')
}

export function getPlaySong(id){
    return `https://music.163.com/song/meids/outer/url?id=${id}.map`
}