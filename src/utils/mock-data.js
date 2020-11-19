/*
 * @Author: 牛皓
 * @Date: 2020-11-06 16:48:17
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-06 17:15:41
 * @FilePath: \wx-music\src\utils\mock-data.js
 */
import Mock from 'mockjs';

const data = [
    'http://p1.music.126.net/cFDl5ZVicgAuLIUksQMdVA==/109951165438279441.jpg?imageView&quality=89',
    'http://p1.music.126.net/ZVvnuPINuWRnDP5UmACBqw==/109951165438116956.jpg?imageView&quality=89',
    'http://p1.music.126.net/RWCKuFJ-PILyvU0b2pRzRw==/109951165438101185.jpg?imageView&quality=89',
    'http://p1.music.126.net/jQtJNgz2zg-uU9btRQ6g5Q==/109951165440602277.jpg?imageView&quality=89',
    'http://p1.music.126.net/OpWq3Ui9KhNXlrIWurKuMw==/109951165440007618.jpg?imageView&quality=89',
]

function MockData(){
    return data;
}

module.exports = [
    Mock.mock('http://123.207.32.32.9001/banner',MockData())
    // Mock.mock('http://20201019Mock.com/modelOne','get',MockData())
]