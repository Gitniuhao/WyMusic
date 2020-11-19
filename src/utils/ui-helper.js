/*
 * @Author: 牛皓
 * @Date: 2020-11-12 16:56:06
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-12 17:03:54
 * @FilePath: \wx-music\src\utils\ui-helper.js
 */
export function scrollTo(element,to,duration){
    if(duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function(){
        element.scrollTop = element.scrollTop + perTick;
        if(element.scrollTop === to) return;
        scrollTo(element,to,duration - 10);
    },10)
}