/*
 * @Author: 牛皓
 * @Date: 2020-11-05 11:18:00
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-05 11:30:23
 * @FilePath: \wx-music\src\services\config.js
 */
const devBaseURL = 'http://123.207.32.32.9001';
const proBaseURL = "https://production.org";

export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;

export const TIMEOUT = 5000;