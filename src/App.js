import logo from './logo.svg';
import './App.css';
import Post from './components/Post';
import Widget from './components/Widget';
import MyProfile from './components/MyProfile';
import VisitorsBook from './components/VisitorsBook';
import { Link, Route, Routes } from 'react-router-dom';
import PostList from './components/Posting/PostList';
import Write_Post from './components/Posting/Write_Post';
import Main from './components/Main';
import Post_detail from './components/Posting/Post_detail';

function App() {
  return (
    <div className="App">
      <h1><Link to="/">공부를 합시다👩‍💻</Link></h1>
      <Routes>
      <Route path='/' element={<Main/>}/>
        <Route path='/create_post' element={<Write_Post/>}/>
        <Route path='/post' element={<PostList/>}/>
        <Route path='/post/:no' element={<Post_detail/>}/>
      </Routes>
    </div>
  );
}

export default App;
