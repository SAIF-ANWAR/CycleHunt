import { Route, Routes } from 'react-router-dom';
import './App.css';
import DashBoard from './pages/DashBoard/DashBoard';
import Home from './pages/Home/Home';
import Blogs from './pages/Blogs/Blogs';
import Login from './pages/Shared/Login';
import Navbar from './pages/Shared/Navbar'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
