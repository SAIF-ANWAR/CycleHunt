import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import OrdereCancelModal from './OrderCancelModal';
import OrderDetail from './OrderDetail';

const AllOrders = () => {
    const { data: orders, isLoading, refetch } = useQuery('available', () => fetch(`https://fathomless-brushlands-38249.herokuapp.com/orders`).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-2 '>
            {
                orders?.map(order => <OrderDetail key={order._id} order={order}></OrderDetail>)
            }
            {
                orders?.map(order => <OrdereCancelModal key={order._id} order={order} refetch={refetch}></OrdereCancelModal>)
            }
        </div>
    );
};

export default AllOrders;