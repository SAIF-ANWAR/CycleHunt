import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../Shared/Loading';

const DashBoard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    console.log(admin)
    // const { data: users, isLoading, refetch } = useQuery('available', () => fetch('https://fathomless-brushlands-38249.herokuapp.com/users/admin').then(res => res.json()))
    // if (isLoading) {
    //     return <Loading></Loading>
    // }
    // console.log(user)
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                <Outlet />
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <li><Link to="/dashboard">My Profile</Link></li>
                    {!admin && <li> <Link to="/dashboard/myorders">My Orders</Link></li>}
                    {!admin && <li> <Link to="/dashboard/addreview">Add Review</Link></li>}
                    {admin && <li><Link to="/dashboard/allorders">Manage Orders</Link></li>}
                    {admin && <li><Link to="/dashboard/allusers">All Users</Link></li>}
                </ul>

            </div>
        </div>


    );
};

export default DashBoard;