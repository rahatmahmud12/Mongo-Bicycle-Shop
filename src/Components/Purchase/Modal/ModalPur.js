import React from "react";
import axios from 'axios';
import useAuth from "../../../Hooks/useAuth";

import { useForm } from "react-hook-form";
import './moda.css'
import Home from "../../Home/Home";
import { Link } from "react-router-dom";


export default function ModalPur({ showModal, handleModalClose, pro }) {


    const { user } = useAuth();
    const { name, price } = pro;

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        console.log(data);
        axios.post('https://fierce-wildwood-43514.herokuapp.com/orders', data)
            .then(res => {
                console.log(res)
                if (res.status) {
                    alert('Added to the orders list!')
                    reset();
                    return data;
                }
            })
    };

    return (
        <>

            <>
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <div className="relative w-auto my-6 mx-auto max-w-5xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                <h3 className="text-3xl font-semibold">
                                    Go ahead!
                                </h3>

                            </div>
                            {/*body*/}
                            <div className="relative  flex-auto">
                                <div className=" flex-col add-service">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <input placeholder="Product" type="text" defaultValue={name} className="border-2" {...register("name")} />

                                        <input placeholder="Price" disabled value={price} className="border-2" type="number" {...register("budget")} />

                                        <input className="border-2" type="submit" />
                                    </form>



                                </div>
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>




        </>
    );
}