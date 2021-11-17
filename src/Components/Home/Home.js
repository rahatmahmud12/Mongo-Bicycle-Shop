import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Banner from './Banner/Banner';
import ExtraPart from './ExtraPart/ExtraPart';
import SelectedProduct from './Products/Product/SelectedProduct';
import Review from './Review/Review';

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fierce-wildwood-43514.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const sixProducts = products.slice(0, 6)
    return (
        <div>
            <Header></Header>
            <div>
                <Banner></Banner>


            </div>
            <h1 className="text-center text-red-400 text-6xl mt-32"> Our Products</h1>
            <div className="mt-24 grid md:grid-cols-2  sm-grid-col-1 lg:grid-cols-3">

                {
                    sixProducts.map(product => <SelectedProduct
                        product={product}
                        key={product.name}
                    ></SelectedProduct>)
                }
            </div>
            <div>
                <Review></Review>
            </div>
            <div className="mt-20">
                <ExtraPart></ExtraPart>
            </div>
            );

            <Footer></Footer>
        </div>
    )
}

export default Home;