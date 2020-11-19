/*
 * @Author: 牛皓
 * @Date: 2020-11-16 17:42:38
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-17 10:42:23
 * @FilePath: \wx-music\src\utils\handle-date.js
 */
export function handleSongsCategory(data){
    //1获取所有的类别
    const category = data.categories;

    //创建类别数据结构
    const categoryData = Object.entries(category).map(([key,value])=>{//Object.entries()将对象内可遍历的键值对生成数组
        return {
            name:value,
            subs:[]
        }
    })
    //将subs添加到对于的类别中
    for(let item of data.sub){//对于数组，字符串，map,set等进行遍历循环
        categoryData[item.category].subs.push(item);
    }

    return categoryData;
}

//获取歌手字母类别
export function generateSingerAlpha(){
    var alphabets = ['-1'];
    var start = "A".charCodeAt(0)//str.chartCodeAt(index)=>返回字符串指定位置的unicode编码
    var last = "Z".charCodeAt(0)

    for(var i = start;i<= last;++i){//String.fromCharCode(unicode编码)=>将unicode编码转换为字符串并返回
        alphabets.push(String.fromCharCode(i))//根据A-Z的unicode编码进行遍历将A-z插入到alphabets中
    }
    alphabets.push('0')//插入0和-1的作用是显示特定的标签

    return alphabets;
}
export const singerAlphas = generateSingerAlpha()