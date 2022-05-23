import { Route, Routes } from 'react-router-dom';
import './App.css';
import DashBoard from './pages/DashBoard/DashBoard';
import Home from './pages/Home/Home';
import Blogs from './pages/Blogs/Blogs';
import Login from './pages/Shared/Login';
import Navbar from './pages/Shared/Navbar'
import Footer from './pages/Shared/Footer';
import ComingSoon from './pages/Shared/ComingSoon';
import Purchase from './pages/Purchase/Purchase';
import SignUp from './pages/Shared/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './pages/Shared/RequireAuth';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <DashBoard></DashBoard>
          </RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/purchase' element={<Purchase></Purchase>}></Route>
        <Route path='/comingSoon' element={<ComingSoon></ComingSoon>}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
