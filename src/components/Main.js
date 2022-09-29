import React from 'react';
import MyProfile from './MyProfile';
import Post from './Post';
import Widget from './Widget';
import VisitorsBook from './VisitorsBook';

const Main = () => {
    return (
        <div className='Main'>
            <h1>공부를 합시다👩‍💻</h1>
        <MyProfile/>
        <Post/>
        <Widget/>
        <VisitorsBook/>
        </div>
    );
};

export default Main;