import React from 'react';

const Handle = (props) => {
    const { product } = props
    const handleDelete = id => {
        const url = `https://fierce-wildwood-43514.herokuapp.com/products/${id}`;
        fetch(url, {
            method: 'DELETE'

        })

            .then(res => res.json())
            .then(data => {
                console.log(data)

            })
    }
    return (
        <div>
            <div className="border-4 ml-5 rounded-md mb-2 mt-10 w-25 p-4 ">

                <h2 className="text-white ">{product.name}</h2>
                <h2 className="text-white text-sm">{product.budget}</h2>
                <button className="bg-blue-800 p-2 text-center text-white rounded-lg" onClick={() => handleDelete(product._id)}>Delete</button>

            </div>

        </div>
    );
};

export default Handle;