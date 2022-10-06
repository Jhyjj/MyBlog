import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import printPost, { getPost, getPosts } from '../../modules/posts';


const PrintPostList = ({list}) => {

    const {data,loading,error} = useSelector(state=>state.printPost.posts)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPosts(list))
    },[dispatch,list])

    console.log(`${list}선택`)

    if(loading) return <div>로딩중입니다.</div>
    if(error) return <div>에러발생..관리자에게 문의해주세요🛠</div>
    if(!data) return <div>데이터를 불러오지 못함</div>


    return (
        <table id="postList">
                <tr>
                    <th>NO</th>
                    <th>말머리</th>
                    <th>제목</th>
                    <th>작성일</th>
                </tr>
                    {data.length===0 && <tr><td colSpan={4}>아직 작성된 포스트가 없습니다.</td></tr>}
                    {data.map(data=>(
                        <tr>
                            <td>{data.no}</td>
                            <td>{data.part}</td>
                            <td><Link to={`/post/${data.no}`}>{data.title}</Link></td>
                            <td>2022.09.30</td>
                        </tr>
                    ))}
            </table>
    );
};

export default PrintPostList;