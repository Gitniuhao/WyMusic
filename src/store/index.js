/*
 * @Author: 牛皓
 * @Date: 2020-11-05 11:34:27
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-06 10:29:18
 * @FilePath: \wx-music\src\store\index.js
 */
import {createStore , applyMiddleware , compose} from 'redux';
// applyMiddleware 中间件
import thunk from 'redux-thunk';
import reducer from './reducer';

//打开谷歌调试工具
const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(reducer , composeEnhancers(
    // 合并中间件
    applyMiddleware(thunk)
))

export default store;