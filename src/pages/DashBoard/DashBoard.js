import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const DashBoard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content ">
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content ">
                    <li><Link to="/dashboard">My Profile</Link></li>
                    {!admin && <li> <Link to="/dashboard/myorders">My Orders</Link></li>}
                    {!admin && <li> <Link to="/dashboard/addreview">Add Review</Link></li>}
                    {admin && <li><Link to="/dashboard/allorders">Manage Orders</Link></li>}
                    {admin && <li><Link to="/dashboard/manageProducts">Manage Products</Link></li>}
                    {admin && <li><Link to="/dashboard/addProduct">Add New Product</Link></li>}
                    {admin && <li><Link to="/dashboard/allusers">Make Admin</Link></li>}
                </ul>

            </div >
        </div >


    );
};

export default DashBoard;