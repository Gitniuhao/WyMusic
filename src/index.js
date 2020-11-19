/*
 * @Author: 牛皓
 * @Date: 2020-11-04 15:44:17
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-19 09:53:55
 * @FilePath: \wx-music\src\index.js
 */
import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./assets/css/base.css"
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // <React.StrictMode>
  <Suspense fallback={<div>loading.....</div>}>
    <App />
  </Suspense>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
