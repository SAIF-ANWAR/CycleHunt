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
import RequireAuth from './pages/Shared/RequireAuth';
import MyProfile from './pages/DashBoard/MyProfile';
import MyOrders from './pages/DashBoard/MyOrders';
import AddReview from './pages/DashBoard/AddReview';
import AllOrders from './pages/DashBoard/AllOrders';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllUsers from './pages/DashBoard/AllUsers';
import RequireAdmin from './pages/Shared/RequireAdmin';
import TrackOrder from './pages/DashBoard/TrackOrder';
import AllProducts from './pages/Products/AllProducts';
import ManageProducts from './pages/DashBoard/ManageProducts/ManageProducts';
import AddProduct from './pages/DashBoard/AddProducts/AddProduct';
import MyPortfolio from './pages/MyPortfolio/MyPortfolio';
import NotFound from './pages/Shared/NotFound';



function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/dashboard' element={<RequireAuth>
          <DashBoard></DashBoard>
        </RequireAuth>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='myorders' element={<MyOrders></MyOrders>}></Route>
          <Route path='addreview' element={<AddReview></AddReview>}></Route>
          <Route path='allorders' element={
            <RequireAdmin>
              <AllOrders></AllOrders>
            </RequireAdmin>
          }></Route>
          <Route path='allusers' element={
            <RequireAdmin>
              <AllUsers></AllUsers>
            </RequireAdmin>
          }></Route>
          <Route path='manageProducts' element={
            <RequireAdmin>
              <ManageProducts></ManageProducts>
            </RequireAdmin>
          }></Route>
          <Route path='addProduct' element={
            <RequireAdmin>
              <AddProduct></AddProduct>
            </RequireAdmin>
          }></Route>

        </Route>

        <Route path='/myPortfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/allProducts' element={<AllProducts></AllProducts>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/purchase/:id' element={<Purchase></Purchase>}></Route>
        <Route path='/trackOrder' element={<TrackOrder></TrackOrder>}></Route>
        <Route path='/comingSoon' element={<ComingSoon></ComingSoon>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
