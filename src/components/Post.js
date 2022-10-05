import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPostLatest } from '../modules/posts';

const Post = () => {

    const {data,error,loading} = useSelector(state=>state.printPost.posts)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPostLatest())
    },[dispatch])

    if(loading) return <div>포스트 목록을 불러오는중..</div>
    if(error) return <div>에러</div>
    if(!data) return <div>데이터없음</div>

    console.log(data);

    return (
        <div id="post" className='innerCon'>
            <h2>POST</h2>

            <span><Link to="/create_post">작성하기</Link></span>

            <ul>
                {data.map(post=>(
                    <li><Link to={`/post/${post.no}`}>{post.title}</Link> <span>{post.date}</span></li>
                ))}
            </ul>

            <span className='more'><Link to="/post">+ more</Link></span>
        </div>
    );
};

export default Post;