/*
 * @Author: 牛皓
 * @Date: 2020-11-04 15:44:17
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-10 15:33:32
 * @FilePath: \wx-music\src\App.js
 */
import React,{memo} from 'react'
import {renderRoutes} from 'react-router-config'//集中配置式路由
import {HashRouter} from 'react-router-dom'
import routes from './router'

import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
import AppPlayerBar from '@/pages/player/app-player-bar';

import { Provider } from 'react-redux'
import store  from './store'

function App() {
  return (
    <Provider store={store}>
        <HashRouter>
            <AppHeader />
            {renderRoutes(routes)}{/*在此处进行路由的渲染 */}
            <AppFooter />
            <AppPlayerBar />
        </HashRouter>
    </Provider>
  );
}

export default memo(App);
