import React from 'react';

const Manage = (props) => {
    const { order } = props
    const handleDelete = id => {
        const url = `http://localhost:5000/orders/${id}`;
        fetch(url, {
            method: 'DELETE'

        })

            .then(res => res.json())
            .then(data => {
                console.log(data)

            })
    }
    return (
        <div className="border-4 rounded-md mb-2 mt-10 w-25 p-4 ">

            <h2 className="text-Black ">{order.name}</h2>
            <h2 className="text-gray-700 text-sm">{order._id}</h2>
            <button className="bg-blue-800 p-2 rounded-lg" onClick={() => handleDelete(order._id)}>Delete</button>

        </div>
    );
};

export default Manage;