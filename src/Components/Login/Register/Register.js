import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';



const Register = () => {
    const [loginData, setLoginData] = useState({});

    const history = useHistory();

    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <div>
            <div className="grid min-h-screen place-items-center">
                <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
                    <h1 className="text-xl font-semibold">Hello there 👋, <span className="font-normal">please fill in your information to continue</span></h1>
                    {!isLoading && <form onSubmit={handleLoginSubmit} className="mt-6">

                        <label for="name" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Your Name</label>
                        <input onChange={handleOnChange} id="name" type="text" name="name" placeholder="Your Name" autocomplete="name" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                        <label for="email" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">E-mail</label>
                        <input onChange={handleOnChange} id="email" type="email" name="email" placeholder="john.doe@company.com" autocomplete="email" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                        <label for="password" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
                        <input id="password" onChange={handleOnChange} type="password" name="password" placeholder="********" autocomplete="new-password" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                        <label for="password-confirm" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Confirm password</label>
                        <input id="password-confirm" onChange={handleOnChange} type="password" name="password2" placeholder="********" autocomplete="new-password" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                        <button type="submit" className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
                            Register
                        </button>
                        <Link to="/login" className="flex justify-between inline-block mt-4 mb-4 text-sm text-blue-700 text-gray-500 cursor-pointer hover:text-black">Already registered?- Login</Link>
                    </form>}
                    {isLoading && <div class="flex justify-center items-center">
                        <div
                            class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"
                        ></div>
                    </div>}
                    {user?.email && <div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
                        <p class="font-bold">Informational message</p>
                        <p class="text-sm">You created account successfully</p>
                    </div>}
                    {authError && <div role="alert">
                        <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                            Be careful-
                        </div>
                        <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                            <p>{authError}</p>
                        </div>
                    </div>}

                </div>
            </div>

        </div>
    );
};

export default Register;