/*
 * @Author: 牛皓
 * @Date: 2020-11-18 09:37:25
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-18 17:37:41
 * @FilePath: \wx-music\src\pages\discover\c-pages\djradio\c-cpngs\radio-category\index.js
 */
import React,{memo,useRef,useEffect} from 'react';
import {useSelector,useDispatch,shallowEqual} from 'react-redux';
import ClassNames from 'classnames'
import {
    getRadioCategories,
    changeCurrentIdAction
} from '../../store/actionCreators'

import {Carousel} from 'antd';
import {
    CategoryWrapper,
    CategoryContent,
    CategoryItemImage
} from './style'

const PAGE_SIZE = 16;

export default memo(function RadioCategory(){
    const {categories,currentId} = useSelector(state => ({
        categories:state.getIn(['djRadio','categories']),
        currentId:state.getIn(['djRadio','currentId'])
    }),shallowEqual);

    const page = Math.ceil(categories.length / PAGE_SIZE) || 1;//使用获取的类别数组的长度除以每页数量再向上取整得出页码

    const dispatch = useDispatch()    
    useEffect(()=>{ 
        dispatch(getRadioCategories())
    },[dispatch])
    //使用useRef获取实例
    const carouselRef = useRef();
    
    function getSize(index){//此方法由通过index*page-size与categories.length的比较，从而动态决定数组抽取的末尾位置；
        return index * PAGE_SIZE > categories.length ? index * PAGE_SIZE : categories.length;
    }
    

    return (
        <CategoryWrapper>
            <div className="arrow arrow-left" onClick={e => carouselRef.current.prev()}></div>
            <CategoryContent>
                <Carousel dots={{className:'dots'}} ref={carouselRef}>
                    {
                        Array(page).fill(0).map((_,index)=>{{/*通过Array().fill()生成数组获取index */}
                            return  (
                                <div key={index} className="category-page">
                                    {
                                        categories.slice(index * PAGE_SIZE,getSize(index + 1)).map((item,index)=>{
                                            return (
                                                <div key={item.id} 
                                                     onClick={e => dispatch(changeCurrentIdAction(item.id))}
                                                     className={ClassNames("category-item",{"active":currentId == item.id})}
                                                >
                                                    <CategoryItemImage className="image" imgUrl={item.picWebUrl}></CategoryItemImage>
                                                    <span>{item.name}</span>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </Carousel>
            </CategoryContent>
            <div className="arrow arrow-right" onClick={e => carouselRef.current.next()}></div>
        </CategoryWrapper>
    )
})

