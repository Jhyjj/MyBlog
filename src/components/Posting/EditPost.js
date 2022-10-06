import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useLocation, useNavigate, useResolvedPath } from 'react-router-dom';
import { API_URL } from '../../config/contansts';

const EditPost = () => {

    const navigator = useNavigate();
    const location = useLocation();
    const data = location.state;
    console.log(data);

    const no = data.no;

    const edit = useRef();

    const [postData, setPostData] = useState({
        title:data.title,
        part:data.part,
        desc:data.desc,
        img:data.img
    })

    const onChange = (e)=>{
        const {name, value} = e.target;
        setPostData({
            ...postData,
            [name]:value
        })
    }

    const onChangeContent = async ()=>{
        console.log(edit.current.innerHTML);
        setPostData({
            ...postData,
            desc:edit.current.innerHTML
        })
    }

    const inputImg = (e)=>{
        console.log("이미지 선택창 팝업");
        const {name} = e.target;
        const img = new FormData();
        console.log(img);
        console.log(e.target.files);
        if(e.target.files.length>=1){
            for(let key in e.target.files){
                img.append(name,e.target.files[key])
            }
        }
        axios.post(`${API_URL}/upload`,img,{
            Headers:{'content-type':'multipart/form-data'}
        })
        .then(res=>{
            console.log(res.data)
            console.log(res.data.img);
            const selectImgs = res.data.img;
            selectImgs.map((imgname)=>{
                const imgEl = document.createElement("img");
                imgEl.src = `${API_URL}/upload/${imgname}`;
                imgEl.alt="";
                edit.current.append(imgEl);
            })
            setPostData({
                ...postData,
                img:selectImgs.join()
            })
        })
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        console.log(postData);
        //서버로 formData보내주기
        axios.post(`${API_URL}/update_post/${no}`,postData)
        .then(res=>{
            console.log(res)
            alert("포스트가 수정되었습니다.")
            navigator("/post")
        })
        }

        


    return (
<div id="write_post">
            <h2>POST EDIT</h2>
            <form onSubmit={onSubmit}>
                <table>
                    <tr>
                        <th>글제목</th>
                        <td><input type="text" name="title" defaultValue={data.title} onChange={onChange}/></td>
                    </tr>

                    <tr>
                        <th>구분</th>
                        <td>
                            <select name="part" defaultValue={data.part} onChange={onChange}>
                                <option>-------</option>
                                <option>일상</option>
                                <option>공지사항</option>
                                <option>HTML/CSS</option>
                                <option>자바스크립트</option>
                                <option>리액트</option>
                            </select>
                        </td>
                    </tr>

                    <tr>
                        <th rowSpan={2}>내용</th>
                        <td>
                            <div id="styles">
                                <span className='btns' >B</span>
                                <span className='btns' >I</span>
                                <span className='btns' >U</span> 
                                <span className='btns' >S</span>
                                <span className='btns'>파일첨부
                                <input type="file" id="hidden-file" multiple name='imgs' onChange={inputImg}/>
                                </span>
                            </div>
                            <div id="desc" contentEditable="true" draggable="true" dangerouslySetInnerHTML={{__html:data.desc}} onInput={onChangeContent} ref={edit}>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td colSpan={2}>
                            <button type="submit">수정</button>
                            <button type="reset">취소</button>
                        </td> 
                    </tr>
                </table>
            </form>
        </div>
    );
};

export default EditPost;