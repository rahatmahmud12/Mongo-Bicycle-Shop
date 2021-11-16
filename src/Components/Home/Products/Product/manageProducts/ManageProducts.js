import React, { useEffect, useState } from 'react';
import Handle from './Handle';

const ManageProducts = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <div>
            {
                products.map(product => <Handle

                    product={product}

                ></Handle>)
            }

        </div>
    );
};

export default ManageProducts;