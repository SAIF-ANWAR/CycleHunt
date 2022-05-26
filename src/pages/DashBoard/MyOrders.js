import React, { useEffect, useState } from 'react';
import auth from '../../firebase.init';
import OrderDetail from './OrderDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import MyOrder from './MyOrder';
import Loading from '../Shared/Loading';
import { useQuery } from 'react-query';

const MyOrders = () => {
    const [user, loading, error] = useAuthState(auth);
    const { data: orders, isLoading, refetch } = useQuery('available', () => fetch(`https://fathomless-brushlands-38249.herokuapp.com/orders/${user?.email}`).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    // const [orders, setOrders] = useState([])
    // useEffect(() => {
    //     const url = `https://fathomless-brushlands-38249.herokuapp.com/orders/${user?.email}`
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setOrders(data))
    // }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-2 '>
            {
                orders?.map(order => <MyOrder key={order._id} order={order} refetch={refetch}></MyOrder>)
            }
        </div>
    );
};

export default MyOrders;