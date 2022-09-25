import logo from './logo.svg';
import './App.css';
import Post from './components/Post';
import Widget from './components/Widget';
import MyProfile from './components/MyProfile';
import VisitorsBook from './components/VisitorsBook';
import { Route, Routes } from 'react-router-dom';
import PostList from './components/Posting/PostList';
import Write_Post from './components/Posting/Write_Post';


function App() {
  return (
    <div className="App">
      <h1>My Blog</h1>
      <MyProfile/>
      <Post/>
      <Widget/>
      <VisitorsBook/>
      <Routes>
        <Route path='/create_post' element={<Write_Post/>}/>
        <Route path='/post' element={<PostList/>}/>
      </Routes>
    </div>
  );
}

export default App;
