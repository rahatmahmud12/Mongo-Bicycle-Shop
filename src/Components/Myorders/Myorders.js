import React, { useEffect, useState } from 'react';
import Manage from './Manage';

const Myorders = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('https://fierce-wildwood-43514.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div>




            <>
                <p className="text-6xl text-center text-white">Your Orders</p>
                <div
                    className="ml-24 flex flex-wrap"

                >

                    {
                        orders.map(order => <Manage
                            key={order._id}
                            order={order}
                        ></Manage>)
                    }

                </div>
            </>


        </div>
    );
};

export default Myorders;