import React from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import MyOrder from './MyOrder';
import Loading from '../Shared/Loading';
import { useQuery } from 'react-query';
import OrdereCancelModal from './OrderCancelModal';

const MyOrders = () => {
    const [user, loading] = useAuthState(auth);
    const { data: orders, isLoading, refetch } = useQuery('available', () => fetch(`https://fathomless-brushlands-38249.herokuapp.com/orders/${user?.email}`).then(res => res.json()))
    if (loading || isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-2 '>
            {
                orders?.map(order => <MyOrder key={order._id} order={order} refetch={refetch}></MyOrder>)
            }
            {
                orders?.map(order => <OrdereCancelModal key={order._id} order={order} refetch={refetch}></OrdereCancelModal>)
            }

        </div>
    );
};

export default MyOrders;