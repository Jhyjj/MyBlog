import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import printPost, { getPost, getPosts } from '../../modules/posts';
import PrintPostList from './PrintPostList';

const PostList = () => {

    const [list, setList] = useState("전체보기"); //기본값은 전체리스트 불러오기
    
    const onClick = (e)=>{
        console.log(e.target.innerHTML);
        setList(e.target.innerHTML);
    }
   
    console.log(list);

    return (
        <div id="posts">

            <ul>
                <li onClick={onClick}>전체보기</li>
                <li onClick={onClick}>공지사항</li>
                <li onClick={onClick}>일상</li>
                <li onClick={onClick}>HTML/CSS</li>
                <li onClick={onClick}>자바스크립트</li>
                <li onClick={onClick}>리액트</li>
                <button>작성하기</button>
            </ul>
            
            <PrintPostList list={list}/>

            <div>페이지네이션 만들기</div>
            <div>검색창 만들기</div>
        </div>
    );
};

export default PostList;<h2>POST</h2>