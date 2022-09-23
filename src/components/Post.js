import React from 'react';

const Post = () => {
    return (
        <div id="post" className='innerCon'>
            <h2>POST</h2>

            <span>작성하기</span>

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