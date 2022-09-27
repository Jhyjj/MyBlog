import React from 'react';
import MyProfile from './MyProfile';
import Post from './Post';
import Widget from './Widget';
import VisitorsBook from './VisitorsBook';

const Main = () => {
    return (
        <div className='Main'>
            <h1>My Blog</h1>
        <MyProfile/>
        <Post/>
        <Widget/>
        <VisitorsBook/>
        </div>
    );
};

export default Main;