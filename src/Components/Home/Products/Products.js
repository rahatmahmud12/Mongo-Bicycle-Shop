import React, { useEffect, useState } from 'react';
import Header from '../../Shared/Header/Header';
import Product from './Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fierce-wildwood-43514.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <div>
            <Header></Header>
            <h1 className="text-5xl text-center mt-32">All Products</h1>
            <div className="grid md:grid-cols-2  sm-grid-col-1 lg:grid-cols-3 mt-20">

                {
                    products.map(product => <Product

                        product={product}

                    ></Product>)
                }

            </div>
        </div>
    );
};

export default Products;