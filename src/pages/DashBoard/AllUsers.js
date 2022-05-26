import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import User from './User';

const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('available', () => fetch('https://fathomless-brushlands-38249.herokuapp.com/users').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <User index={index} key={user._id} user={user} refetch={refetch}></User>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUsers;