/*
 * @Author: 牛皓
 * @Date: 2020-11-17 11:44:52
 * @LastEditors: 牛皓
 * @LastEditTime: 2020-11-17 15:16:05
 * @FilePath: \wx-music\src\components\custom-pagination\index.js
 */
import React,{memo} from 'react';
import {Pagination} from 'antd';
import {PaginationWrapper} from './style'

export default memo(function CustomPagination(props){
    const {currentPage,total,onPageChange} = props;

    function itemRender(current,type,originalElement){
        if(type == 'prev'){
            return <button className="control prev">&lt; 上一页</button>;
        }
        if(type == 'next'){
            return <button className="control next">下一页 &gt;</button>;
        }
        return originalElement;
    }

    return (
        <PaginationWrapper>
           <Pagination className="pagination"
                size="small"
                current={currentPage}
                defaultCurrent={1}
                total={total}
                pageSize={35}
                showSizeChanger={false}
                itemRender={itemRender}
                onChange={onPageChange} />
        </PaginationWrapper>
    )
})