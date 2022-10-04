import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../config/contansts';


const Write_Post = () => {

    const editor = document.querySelector('#desc');
    const edit = useRef();
    const current = edit.current;

    const [formData, setFormData] = useState({
        title:"",
        part:"",
        desc:"",
        img:""
    })

    const onChange = (e)=>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    //이미지 삽입
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
            setFormData({
                ...formData,
                img:selectImgs.join()
            })
        })
    }

    console.log(formData);

    //에디터 스타일 상테관리
    const [style, setStyle] = useState("");

    //btns를 눌렀을때 스타일을 적용시켜주는 함수 => clipboard API 사용하기
    const onStyleChange = async (e)=>{
        e.target.classList.toggle('seleted');
        if(style===e.target.innerHTML){
            setStyle("");
            console.log(`스타일 초기화 ${style}`);
        }else{
            setStyle(e.target.innerHTML);
        }
        
    }

    useEffect(()=>{
        if(style==="B"){
             current.classList.toggle("bold");
        }else if(style==="I"){
            current.classList.toggle("italic");
        }
    },[style])

    const onChangeContent = async ()=>{
        console.log(edit.current.innerHTML);
        // const descContent = await navigator.clipboard.write(edit.current);
        // console.log(descContent);
        setFormData({
            ...formData,
            desc:edit.current.innerHTML
        })
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        console.log(formData);
        //서버로 formData보내주기
        axios.post(`${API_URL}/create_post`,formData)
        .then(res=>
            console.log(res))
        }

    return (
        <div id="write_post">
            <h2>POST EDIT</h2>
            <form onSubmit={onSubmit}>
                <table>
                    <tr>
                        <th>글제목</th>
                        <td><input type="text" onChange={onChange} name="title"/></td>
                    </tr>

                    <tr>
                        <th>구분</th>
                        <td>
                            <select onChange={onChange} name="part">
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
                                <span className='btns' onClick={onStyleChange}>B</span>
                                <span className='btns' onClick={onStyleChange}>I</span>
                                <span className='btns' onClick={onStyleChange}>U</span> 
                                <span className='btns' onClick={onStyleChange}>S</span>
                                <span className='btns'>파일첨부
                                <input type="file" id="hidden-file" onChange={inputImg} multiple name='imgs'/>
                                </span>
                            </div>
                            <div id="desc" contentEditable="true" draggable="true" ref={edit} onInput={onChangeContent}>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td colSpan={2}>
                            <button type="submit">작성</button>
                            <button type="reset">취소</button>
                        </td> 
                    </tr>
                </table>
            </form>
        </div>
    );
};

export default Write_Post;