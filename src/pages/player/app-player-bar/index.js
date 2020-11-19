/*
 * @Author: 牛皓
 * @Date: 2020-11-10 10:23:37
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-13 17:20:10
 * @FilePath: \wx-music\src\pages\player\app-player-bar\index.js
 */
import React,{memo , useState ,useEffect , useRef , useCallback} from  'react'
import {useDispatch , useSelector , shallowEqual} from 'react-redux'

import { getSizeImage , formatDate , getPlaySong} from '@/utils/format-utils'
import {Slider,message } from 'antd'
import {
    getSongDetailAction,
    changePlaySequenceAction,
    changeCurrentLyricIndexAction,
    changePlaySongAction
} from '../store/actioncreators'

import { NavLink } from 'react-router-dom'
import AppPlayerPanel from '../app-player-panel'

import {
    PlaybarWrapper,
    Control,
    PlayInfo,
    Operator
} from './style';

export default memo(function AppPlayerBar(){
    //歌曲播放的时间
    const [currentTime , setCurrentTime] = useState(0);
    //进度条的位置
    const [progress , setProgress] = useState(0);
    /*因为滑动进度条的时候和歌曲播放的过程中，都会改变进度条的位置，这样两者就冲突了：就是当把进度条滑到50，
    但是歌曲刚刚播放，这个时候进度条它就会马上回到我们播放的位置，两者冲突，所以必须有个判断。
    */
    const [isChanging , setIsChanging] = useState(false)
    /* 就是播放粘贴，来回切换*/
    const [isPlaying , setIsPlaying] = useState(false);
    const [showPanel,setShowPanel] = useState(false);

    //使用react-redux获取store中的数据
    const { currentSong,currentLyrics,currentLyricIndex,playList,playSequence} = useSelector(state => ({
        currentSong:state.getIn(['player','currentSong']),
        currentLyrics:state.getIn(['player','currentLyrics']),
        currentLyricIndex:state.getIn(['player','currentLyricIndex']),
        playList:state.getIn(['player','playList']),
        playSequence:state.getIn(['player','playSequence']),
    }),shallowEqual)

    
    const dispatch = useDispatch()
     //使用ref获取auiod标签的实例
     const audioRef = useRef();
    useEffect(() =>{//dispatch发送请求像后台请求数据,获取歌曲播放地址
        dispatch(getSongDetailAction(1487528112));
        console.log(audioRef,'audioRef')
    },[dispatch]);
   
    useEffect(()=>{//此处根据获取到的歌曲的播放地址进行设置
        audioRef.current.src = getPlaySong(currentSong.id)
        //   console.log(isPlaying,'isPlaying')
    },[currentSong]);


    //数据处理
    const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
    const singerName = (currentSong.ar && currentSong.ar[0].name) || '未知歌手';
    const duration = currentSong.dt || 0;
    const showDuration = formatDate(duration,"mm:ss");
    const showCurrentTime = formatDate(currentTime , "mm:ss")

    //歌曲的暂停与播放
    const playMusic = useCallback(()=>{       
        isPlaying ? audioRef.current.pause() : audioRef.current.play().catch(err => {
            setIsPlaying(true);
        });
        setIsPlaying(!isPlaying)//点击播放按钮，则在原本isPlaying的基础上改变进行设置        
    },[isPlaying])

    //歌曲播放的时候，进度条和歌曲时间的改变
    const timeUpdate = (e) =>{
        const currentTime = e.target.currentTime
        if(!isChanging){
            setCurrentTime(currentTime * 1000);
            setProgress(currentTime / duration * 100);
        }

        let lrcLength = currentLyrics.length;
        let i =0;
        for(;i< lrcLength;i++){
            const lrcTime = currentLyrics[i].time;
            if(currentTime * 1000 < lrcTime){
                break;
            }
        }

        const finalIndex = i - 1;
        if(finalIndex != currentLyricIndex){
            dispatch(changeCurrentLyricIndexAction(finalIndex))
            // message.open({
            //     content:currentLyrics[finalIndex].content,
            //     key:'lyric',
            //     duration:0,
            //     className:'lyric-message'
            // })
        }
    }

    //变换0,1,2，循环，单曲等
    const changeSequence  = ()=>{
        let currentSequence = playSequence + 1;
        if(currentSequence > 2){
            currentSequence = 0;
        }
        dispatch(changePlaySequenceAction(currentSequence))
    }

    //上一首，下一首
    const changeMusic = (tag) => {
        dispatch(changePlaySongAction(tag))
    }

    //歌曲播放完之后的处理
    const handleMusicEnded = ()=>{
        if(playSequence === 2){//当前如果是单曲循环
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        }else{
            dispatch(changePlaySongAction(1))//播放下一首
        }
    }


    //当拉动进度条的时候，当Slider的值发生改变时，把改变后的值作为参数传入，
    //且useCallback主要用在当一个回调函数传到一个自定义组件内部时候用。
    const sliderChange = useCallback((value)=>{
        setIsChanging(true);
        const currentTime = value / 100 * duration;
        setCurrentTime(currentTime);
        setProgress(value);
    },[duration])

    const sliderAfterChange = useCallback((value) =>{
        const currentTime = value /100 * duration / 1000;
        audioRef.current.currentTime = currentTime;
        setCurrentTime(currentTime * 1000);
        setIsChanging(false);

        if(!isChanging){
            playMusic();
        }
    },[duration , isPlaying , playMusic]);

    return (
        <PlaybarWrapper className="sprite_player">
            <div className="content wrap-v2">
                <Control isPlaying={isPlaying}>
                    <button className="sprite_player prev" onClick={e => changeMusic(-1)}></button>
                    <button className="sprite_player play" onClick={e=> playMusic()}></button>
                    <button className="sprite_player next" onClick={e => changeMusic(1)}></button>
                </Control>
                <PlayInfo>
                    <div className="image">
                        <a href="/#">
                            <img src={getSizeImage(picUrl,35)} alt="" />
                        </a>
                    </div>
                    <div className="info">
                        <div className="song">
                            <span className="song-name">{currentSong.name}</span>
                            <a href="#/" className="singer-name">{singerName}</a>
                        </div>
                        <div className="progress">
                            <Slider 
                                default={30}
                                value={progress}
                                onChange={sliderChange}
                                onAfterChange={sliderAfterChange}
                            />
                            <div className="time">
                                <span className="now-time">{showCurrentTime}</span>
                                <span className="divider">/</span>
                                <span className="duration">{showDuration}</span>
                            </div>
                        </div>
                    </div>
                </PlayInfo>
                <Operator>
                    <div className="left">
                        <button className="sprite_player btn favor"></button>
                        <button className="sprite_player btn share"></button>
                    </div>
                    <div className="right sprite_player">
                        <button className="sprite_player btn volume"></button>
                        <button className="sprite_player btn loop" onClick={e => changeSequence()}></button>
                        <button className="sprite_player btn playlist" onClick={e=>setShowPanel(!showPanel)}></button>
                    </div>
                </Operator>
            </div>
            <audio src={getPlaySong(currentSong.id)} ref={audioRef} onTimeUpdate={timeUpdate} onEnded={e =>handleMusicEnded()} />
            {showPanel && <AppPlayerPanel />}
        </PlaybarWrapper>
    )
} )

