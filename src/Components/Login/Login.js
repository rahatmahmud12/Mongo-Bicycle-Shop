import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(newLoginData)
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
        console.log(loginData)
    }
    const handleGoogle = () => {
        signInWithGoogle(location, history)
    }
    return (
        <div>
            <div className="flex justify-center mt-16 bg-gray-100">
                <div className="  border-2 border-gray-200 p-3 bg-white">

                    <div className="text-center my-6">
                        <h1 className="text-3xl font-semibold text-gray-700">Sign in</h1>
                        <p className="text-gray-500">Sign in to access your account</p>
                    </div>

                    <div className="m-6">
                        <form className="mb-4" onSubmit={handleLoginSubmit}>
                            <div className="mb-6">
                                <label for="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                                <input type="email" name="email" id="email" onChange={handleOnChange} placeholder="Your email address" className="w-96 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                            </div>
                            <div className="mb-6">
                                <div className="flex justify-between mb-2">
                                    <label for="password" className="text-sm text-gray-600 dark:text-gray-400">Password</label>
                                    <a href="#!" className="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300">Forgot password?</a>
                                </div>
                                <input type="password" onChange={handleOnChange} name="password" id="password" placeholder="Your password" className="w-96 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                            </div>
                            <div className="mb-6">
                                <button type="submit" className="w-96 px-3 py-4 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none duration-100 ease-in-out">Sign in</button>
                            </div>
                            <p className="text-sm text-center text-gray-400">
                                Don&#x27;t have an account yet?
                                <Link to="/register" className="font-semibold text-indigo-500 focus:text-indigo-600 focus:outline-none focus:underline">Register</Link>.
                            </p>
                        </form>

                        {isLoading && <div className="flex justify-center items-center">
                            <div
                                className="
      animate-spin
      rounded-full
      h-32
      w-32
      border-t-2 border-b-2 border-purple-500
    "
                            ></div>
                        </div>}

                        {user?.email && <alert>successfull</alert>}

                        {authError && <div role="alert">
                            <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                                Be careful-
                            </div>
                            <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                                <p>{authError}</p>
                            </div>
                        </div>}

                        <div className="flex flex-row justify-center mb-8">
                            <span className="absolute bg-white px-4 text-gray-500">or sign-in with</span>
                            <div className="w-full bg-gray-200 mt-3 h-px"></div>
                        </div>

                        <div className="flex flex-row gap-2">
                            <button onClick={handleGoogle} className="bg-green-500 text-white w-44 p-2 flex flex-row justify-center gap-2 items-center rounded-sm hover:bg-green-600 duration-100 ease-in-out">

                                Google
                            </button>
                            <button className="bg-gray-700 text-white w-44 p-2 flex flex-row justify-center gap-2 items-center rounded-sm hover:bg-gray-800 duration-100 ease-in-out">

                                Github
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;