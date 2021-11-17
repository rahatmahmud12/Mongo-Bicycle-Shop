import React from 'react';
import axios from 'axios';

import { useForm } from "react-hook-form";
import './AddProduct.css'

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        console.log(data);
        axios.post('https://fierce-wildwood-43514.herokuapp.com/products', data)
            .then(res => {
                console.log(res)
                if (res.status) {
                    alert('Added okay!')
                    reset();
                }
            })
    };
    return (
        <div>
            <h1 className="text-center text-gray-200 mt-24">Please Add A Product</h1>
            <div className="mt-24 flex-col add-service">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Product" className="border-2" {...register("name")} />
                    <textarea placeholder="Description" className="border-2" {...register("Description")} />
                    <input placeholder="Price" className="border-2" type="number" {...register("budget")} />
                    <input placeholder="Image URL" className="border-2" {...register("img",)} />
                    <input className="border-2" type="submit" />
                </form>



            </div>
        </div>
    );
};

export default AddProduct;