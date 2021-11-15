import React from 'react';
import axios from 'axios';

import { useForm } from "react-hook-form";
import useAuth from '../../../../Hooks/useAuth';

const SetReview = () => {
    const { user } = useAuth();
    const { email, name } = user


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        console.log(data);
        axios.post('http://localhost:5000/reviews', data)
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

            <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl bg-white py-10 px-5 m-auto w-full mt-10">

                <div className="text-3xl mb-6 text-center ">
                    Please Leave A Review
                </div>

                <div className="grid grid-cols-2 gap-4 max-w-xl m-auto">

                    <div className="col-span-2 lg:col-span-1">
                        <input type="text" value={name} className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full" placeholder="Name" {...register("name")} />
                    </div>

                    <div className="col-span-2 lg:col-span-1">
                        <input type="text" value={email} className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full" placeholder="Email Address" {...register("email")} />
                    </div>

                    <div className="col-span-2">
                        <textarea cols="30" rows="8" className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full" placeholder="Review" {...register("Description")}></textarea>
                    </div>
                    <div className="col-span-2">
                        <input cols="30" rows="8" className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full" placeholder="Rating" {...register("rating")}></input>
                    </div>

                    <div className="col-span-2 text-right">
                        <input className="border-2 mr-64 bg-blue-800 rounded-md text-white py-1 px-2" type="submit" />
                    </div>

                </div>
            </form>

        </div >
    );
};

export default SetReview;