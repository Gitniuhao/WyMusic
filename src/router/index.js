/*
 * @Author: 牛皓
 * @Date: 2020-11-04 16:51:57
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-19 09:44:15
 * @FilePath: \wx-music\src\router\index.js
 */
import React from 'react'
import {Redirect} from 'react-router-dom'    
// Redirect是为了重定向，当进页面的时候展示哪一个
// import Discover from "@/pages/discover";
// import Recommend from "@/pages/discover/c-pages/recommend";
// import Ranking from "@/pages/discover/c-pages/ranking";
// import Songs from "@/pages/discover/c-pages/songs";
// import Djradio from "@/pages/discover/c-pages/djradio";
// import Artist from "@/pages/discover/c-pages/artist";
// import Album from "@/pages/discover/c-pages/album";
// import Player from '@/pages/player'

// import Mine from "@/pages/mine";
// import Friend from "@/pages/friend";

const Discover = React.lazy(_=> import("@/pages/discover"))
const Recommend = React.lazy(_=> import("@/pages/discover/c-pages/recommend"))
const Ranking = React.lazy(_=> import("@/pages/discover/c-pages/ranking"))
const Songs = React.lazy(_=> import("@/pages/discover/c-pages/songs"))
const Djradio = React.lazy(_=> import("@/pages/discover/c-pages/djradio"))
const Artist = React.lazy(_=> import("@/pages/discover/c-pages/artist"))
const Album = React.lazy(_=> import("@/pages/discover/c-pages/album"))
const Player = React.lazy(_=> import('@/pages/player'))

const Mine = React.lazy(_=> import("@/pages/mine"))
const Friend = React.lazy(_=> import("@/pages/friend"))



const routes = [
    {
        path:"/",
        exact:true,
        render:()=>(
            <Redirect to="/discover" />
        )
    },
    {
        path:"/discover",
        component:Discover,
        routes:[
            {
                path:"/discover",
                exact:true,
                render:()=>(
                    <Redirect to="/discover/recommend" />
                )
            },
            {
                path:"/discover/recommend",
                component:Recommend
            },
            {
                path:"/discover/ranking",
                component:Ranking
            },
            {
                path:"/discover/songs",
                component:Songs
            },
            {
                path:"/discover/djradio",
                component:Djradio
            },
            {
                path:"/discover/artist",
                component:Artist
            },
            {
                path:"/discover/album",
                component:Album
            },
            {
                path:"/discover/player",
                component:Player
            },
        ]
    },
    {
        path:'/mine',
        component:Mine
    },
    {
        path:'/friend',
        component:Friend
    },
]

export default routes;