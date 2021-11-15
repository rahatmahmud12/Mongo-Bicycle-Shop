import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import SetReview from '../Home/Review/SetRev/SetReview';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Myorders from '../Myorders/Myorders';
import { faHome } from '@fortawesome/free-solid-svg-icons'

const Dasboard = () => {
    const { logout } = useAuth();
    const copyRight = <FontAwesomeIcon icon={faHome} />
    return (

        <div>
            <div className=" w-full flex bg-gray-800">
                <nav className="w-24 flex flex-col items-center bg-gray-900 py-4">
                    <div className="text-lg font-semibold text-white">DashBoard</div>

                    <ul className="mt-2 text-gray-300 font-semibold">
                        <li className="mt-3 t">
                            <Link to="/myorders" className="flex text-white no-underline flex-col items-center text-sm capitalize">
                                <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                                    <path
                                        d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9
                    17v2H5v-2h4M21 3h-8v6h8V3M11 3H3v10h8V3m10
                    8h-8v10h8V11m-10 4H3v6h8v-6z"
                                    ></path>
                                </svg>
                                <span>My Orders</span>
                            </Link>
                        </li>
                        <li className="mt-3 t">
                            <Link to="setreview" className="flex text-white no-underline flex-col items-center text-sm capitalize">
                                <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                                    <path
                                        d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9
                    17v2H5v-2h4M21 3h-8v6h8V3M11 3H3v10h8V3m10
                    8h-8v10h8V11m-10 4H3v6h8v-6z"
                                    ></path>
                                </svg>
                                <span>Review</span>
                            </Link>
                            <Link to="/pay" className="flex text-white no-underline flex-col items-center text-sm capitalize">
                                <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                                    <path
                                        d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9
                    17v2H5v-2h4M21 3h-8v6h8V3M11 3H3v10h8V3m10
                    8h-8v10h8V11m-10 4H3v6h8v-6z"
                                    ></path>
                                </svg>
                                <span>Pay Here</span>
                            </Link>

                            <Link to="/home" className="flex mt-10 text-white no-underline flex-col items-center text-sm capitalize">

                                <span>{copyRight}</span>   <span>Home</span>
                            </Link>
                            <button onClick={logout}> <Link className="flex flex-col mt-20 no-underline text-white items-center text-sm capitalize">

                                <span>LogOut</span>
                            </Link></button>



                        </li>
                    </ul>
                </nav>

                <main className="w-full overflow-y-auto">
                    <div className="mt-5 grid-cols-2">
                        <SetReview></SetReview>

                    </div>



                </main>
            </div>
        </div>
    );
};

export default Dasboard;