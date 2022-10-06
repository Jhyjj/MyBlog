import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { API_URL } from '../../config/contansts';
import printPost, { getPost } from '../../modules/posts';


const Post_detail = () => {

    const navigator = useNavigate();
    const {no} = useParams();
    console.log(no);

    const {loading, data, error} = useSelector(state=>state.printPost.post);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPost(no))
    },[dispatch,no])


    //포스트 삭제
    const onDelete = ()=>{
        alert("정말 이 포스트를 삭제하시겠습니까?")
        axios.post(`${API_URL}/delete/${no}`)
        .then(res=>{
            console.log(res)
            alert("포스트가 삭제되었습니다.")
            navigator("/post")
        })
    }

    if(loading) return <div>로딩중~~</div>
    if(error) return <div>에러발생</div>
    if(!data) return <div>데이터를 불러오지 못함</div>


    //const descTd = document.querySelector('#descTd');
    //const descDiv = document.createElement('div');
    //descDiv.innerHTML = data.desc;
    //descTd.appendChild(descDiv);
    console.log(data.desc);

    return (
        <div id="postDetail">
           <h2>[<span>{data.part}]</span>{data.title} <span>{data.date}</span></h2>
            <span><Link to="/post">목록으로</Link></span>
            <div dangerouslySetInnerHTML={{__html:data.desc}}></div>

            <div>
                <button><Link to={`/editpost/${no}`} state={data}>수정</Link></button>
                <button onClick={onDelete}>삭제</button>
            </div>
        </div>
    );
};

export default Post_detail;