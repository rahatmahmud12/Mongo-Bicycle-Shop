import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

import { useForm } from "react-hook-form";
import ModalPur from './Modal/ModalPur';

const Purchase = () => {
    const { productId } = useParams()

    const [product, setProduct] = useState({})
    const name = product.name
    const price = product.budget
    const pro = { name, price }


    useEffect(() => {
        fetch(`https://fierce-wildwood-43514.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])



    // const { register, handleSubmit, reset } = useForm();
    // const onClick = data => {

    //     console.log(data);
    //     axios.post('https://fierce-wildwood-43514.herokuapp.com/orders', data)
    //         .then(res => {
    //             console.log(res)
    //             if (res.status) {
    //                 alert('Successfully added at the Orders')
    //                 reset();
    //             }
    //         })
    // }



    const [showModal, setShowModal] = React.useState(false);

    const handleModalOpen = () => setShowModal(true)
    const handleModalClose = () => setShowModal(false)
    return (
        <div>

            <main className="grid w-full min-h-screen bg-gray-900 place-content-center">
                <div className="rounded-lg">
                    <div className="bg-gray-100 rounded-lg w-96">
                        <form >
                            <img src={product.img} alt=""
                                className="w-full h-48 transition duration-300 rounded-t-lg sm:h-56 opacity-80 hover:opacity-100" />

                            <div className="px-10 py-6 mb-10 text-center">
                                <div className="mb-4 text-3xl font-bold text-purple-600 uppercase">{product.name}</div>
                                <span className="text-sm">
                                    {product.Description}
                                </span>
                            </div>
                            <button onClick={handleModalOpen}
                                className="w-full h-16 text-lg font-extrabold text-gray-100 transition duration-300 bg-purple-600 rounded-b-lg hover:bg-purple-700">Buy Now</button>
                        </form>
                    </div>
                </div>
            </main>


            <ModalPur
                showModal={showModal}
                handleModalClose={handleModalClose}
                pro={pro}
            ></ModalPur>
        </div>
    );
};

export default Purchase;












