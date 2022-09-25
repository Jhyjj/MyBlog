import React from 'react';

const VisitorsBook = () => {
    let arr  = [1,2];
    return (
        <div id="visitor" className='innerCon'>
            <h2>방명록</h2>

            <span>작성하기</span>

            <ul>
                <li>첫번째 방명록</li>
                <li>두번째 방명록</li>
            </ul>

            <span className='more'>+ more</span>
        </div>
    );
};

export default VisitorsBook;