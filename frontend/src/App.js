import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import './App.css';
import Blog from './pages/Blog.jsx';
import Sign_up from './pages/Sign_up.jsx';
import Login from './pages/Login.jsx';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/sign-up' element={<Sign_up/>}/>
      <Route path='/blog' element={<Blog/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
