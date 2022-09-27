import React from 'react';

const Write_Post = () => {

    const onChange = (e)=>{
        console.log(e.target.value);
    }

    const onChange2 = (e)=>{
        console.log(e);
    }

    return (
        <div id="write_post">
            <h2>POST EDIT</h2>
            <form>
                <table>
                    <tr>
                        <th>글제목</th>
                        <td><input type="text" onChange={onChange}/></td>
                    </tr>

                    <tr>
                        <th>구분</th>
                        <td>
                            <select onChange={onChange}>
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
                        <th>내용</th>
                        <td>
                            <div id="desc" contentEditable="true">
                                <span><input type="file"/></span>
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