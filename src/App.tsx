import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Navbar from './components/Navbar/Navbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Project from './pages/Projects/Project1/Project';
import Project2 from './pages/Projects/Project2/Project2';
import Project3 from './pages/Projects/Project3/Project3';
import Project4 from './pages/Projects/Project4/Project4';
import Project5 from './pages/Projects/Project5/Project5';
import Project6 from './pages/Projects/Project6/Project6';
function App() {

  return (
    <>
        <Navbar />
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/project/1' element={<Project />} />
          <Route path='/project/2' element={<Project2 />} />
          <Route path='/project/3' element={<Project3 />} />
          <Route path='/project/4' element={<Project4 />} />
          <Route path='/project/5' element={<Project5 />} />
          <Route path='/project/6' element={<Project6 />} />
        </Routes>
    </>

  )
}

export default App
