import React, { useEffect, useState } from 'react';
import OrderDetail from './OrderDetail';

const AllOrders = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        const url = `https://fathomless-brushlands-38249.herokuapp.com/orders`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-2 '>
            {
                orders?.map(order => <OrderDetail key={order._id} order={order}></OrderDetail>)
            }
        </div>
    );
};

export default AllOrders;