/*
 * @Author: 牛皓
 * @Date: 2020-11-05 11:38:51
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-18 17:39:48
 * @FilePath: \wx-music\src\store\reducer.js
 */
// combineReducers: 合并reducer,因为可鞥有多个reducer

// 类似 immutable,深拷贝
import { combineReducers } from 'redux-immutable'

//避免命名冲突，使用as重命名
import { reducer as recommendReducer } from '../pages/discover/c-pages/recommend/store'
import { reducer as playerReducer } from '../pages/player/store'
import { reducer as rankingReducer } from '../pages/discover/c-pages/ranking/store'
import { reducer as artistReducer } from '../pages/discover/c-pages/artist/store'
import { reducer as albumReducer } from '../pages/discover/c-pages/album/store'
import { reducer as songsReducer } from '../pages/discover/c-pages/songs/store'
import { reducer as djRadioReducer } from '../pages/discover/c-pages/djradio/store'

const cReducer = combineReducers({
    recommend : recommendReducer,
    player : playerReducer,
    ranking : rankingReducer,
    artist : artistReducer,
    album : albumReducer,
    songs : songsReducer,
    djRadio : djRadioReducer,
})

export default cReducer;