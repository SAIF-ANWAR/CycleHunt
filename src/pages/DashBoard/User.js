import React from 'react';
import { toast } from 'react-toastify';

const User = ({ user, refetch }) => {
    const makeAdmin = () => {
        const url = `https://fathomless-brushlands-38249.herokuapp.com/users/admin/${user?.userEmail}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success("Admin Created")
                refetch()
            })
    }
    return (
        <tr>
            <th>1</th>
            <td> {user?.userName} </td>
            <td>{user?.userEmail}</td>
            <td> {user?.role !== "admin" && <button onClick={makeAdmin} className='btn btn-sm'>Make Admin</button>} </td>
        </tr>
    );
};

export default User;