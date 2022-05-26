import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import Loading from './Loading';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);

    const logOut = () => {
        signOut(auth)
    }
    if (loading) {
        return <Loading></Loading>
    }

    const navMenu = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/allProducts">Tools</Link></li>
        <li><Link to="/myPortfolio">My Portfolio</Link></li>
        <li> {user && <Link to="/dashboard">Dashboard</Link>} </li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li> {user && <p className='font-bold'>{user?.displayName}</p>} </li>
        <li>{user ? <button onClick={logOut} className="btn btn-ghost">Log Out</button> : <Link to="/login">Login</Link>}</li>
    </>
    return (
        <div className="navbar bg-base-100 px-20 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 py-2 px-1 shadow bg-base-100 rounded-box w-52">
                        {navMenu}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">CycleHunt</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal py-2">
                    {navMenu}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;