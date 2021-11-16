import React from 'react';

import useAuth from '../../Hooks/useAuth';
import SetReview from '../Home/Review/SetRev/SetReview';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Myorders from '../Myorders/Myorders';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import DasHome from './DasHome';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import MakeAdmin from './MakeAdmin/MakeAdmin';
import Payment from '../Payment/Payment';
import AddProduct from '../AddProduct.js/AddProduct';
import AdminRoute from '../Login/AdminRoute.js/AdminRoute';
import ManageProducts from '../Home/Products/Product/manageProducts/ManageProducts';

const Dasboard = () => {
    const { logout, admin } = useAuth();

    let { path, url } = useRouteMatch();
    const copyRight = <FontAwesomeIcon icon={faHome} />
    return (

        // <Link to={`${url}> DashBoard</Link>


        <div className="w-100 ">

            <div className="  flex bg-gray-800">
                <nav className="w-40 flex flex-col items-center bg-gray-900 py-4">
                    <div className="text-lg font-semibold text-white"> <Link to={`${url}`} className="text-white no-underline "> DashBoard</Link> </div>

                    <ul className="mt-2 text-gray-300 font-semibold">
                        <li className="mt-6 ">
                            <Link to={`${url}/myorders`} className="flex text-white no-underline flex-col items-center text-sm capitalize">
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
                        <li className="mt-6 t">
                            <Link to={`${url}/setreview`} className="flex text-white no-underline flex-col items-center text-sm capitalize">
                                <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                                    <path
                                        d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9
                    17v2H5v-2h4M21 3h-8v6h8V3M11 3H3v10h8V3m10
                    8h-8v10h8V11m-10 4H3v6h8v-6z"
                                    ></path>
                                </svg>
                                <span>Review</span>
                            </Link>
                            <Link to={`${url}/pay`} className="flex mt-6 text-white no-underline flex-col items-center text-sm capitalize">
                                <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                                    <path
                                        d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9
                    17v2H5v-2h4M21 3h-8v6h8V3M11 3H3v10h8V3m10
                    8h-8v10h8V11m-10 4H3v6h8v-6z"
                                    ></path>
                                </svg>
                                <span>Pay Here</span>
                            </Link>
                            {admin && <div>
                                <Link to={`${url}/makeadmin`} className="flex text-white mt-6 no-underline flex-col items-center text-sm capitalize">

                                    <span>Make Admin</span>
                                </Link>
                                <Link to={`${url}/addProduct`} className="flex text-white mt-6 no-underline flex-col items-center text-sm capitalize">

                                    <span>Add Product</span>
                                </Link>

                                <Link to={`${url}/manageproducts`} className="flex text-white mt-6 no-underline flex-col items-center text-sm capitalize">

                                    <span>Manage Products</span>
                                </Link>

                            </div>}
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
                        <Switch>
                            <Route exact path={path}>
                                <DasHome></DasHome>
                            </Route>
                            <AdminRoute path={`${path}/makeadmin`}>
                                <MakeAdmin></MakeAdmin>

                            </AdminRoute>
                            <AdminRoute path={`${path}/addProduct`}>
                                <AddProduct></AddProduct>

                            </AdminRoute>
                            <AdminRoute path={`${path}/manageproducts`}>
                                <ManageProducts></ManageProducts>

                            </AdminRoute>
                            <Route path={`${path}/setreview`}>
                                <SetReview></SetReview>

                            </Route>
                            <Route path={`${path}/myorders`}>
                                <Myorders></Myorders>

                            </Route>
                            <Route path={`${path}/pay`}>
                                <Payment></Payment>

                            </Route>
                        </Switch>

                    </div>





                </main>
            </div>
        </div>
    );
};

export default Dasboard;