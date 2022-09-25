import React from 'react';
import { Link } from 'react-router-dom';

const Post = () => {


    return (
        <div id="post" className='innerCon'>
            <h2>POST</h2>

            <span><Link to="/create_post">작성하기</Link></span>

            <ul>
                <li><a>첫번째 포스팅</a> <span>2022-09-23</span></li>
                <li><a>두번째 포스팅</a> <span>2022-09-23</span></li>
                <li><a>세번째 포스팅</a> <span>2022-09-23</span></li>
                <li><a>두번째 포스팅</a> <span>2022-09-23</span></li>
            </ul>

            <span className='more'>+ more</span>
        </div>
    );
};

export default Post;