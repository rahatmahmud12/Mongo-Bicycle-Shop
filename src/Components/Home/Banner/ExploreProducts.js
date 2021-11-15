import React from 'react';
import { Link } from 'react-router-dom';

const ExploreProducts = () => {
    return (
        <div>
            <div className=" ml-52 -mb-40  w-full">
                <div
                    className="
          
          shadow-md
          h-96
          mx-3
          rounded-3xl
          flex flex-col
          justify-around
          items-center
          overflow-hidden
          sm:flex-row sm:h-52 sm:w-3/5
          md:w-96
        "
                >
                    {/* <img
                        className="h-1/2 w-full sm:h-full sm:w-1/2 object-cover"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYE3rlu2l7sOIySIU4NgrRdgMMHSwuXPF_NQ&usqp=CAU"
                        alt="image"
                    /> */}

                    <div
                        className="
            flex-1
            w-full
            flex flex-col
            items-baseline
            justify-around
            h-1/2
            pl-6
            sm:h-full sm:items-baseline sm:w-1/2
          "
                    >
                        <div className="flex flex-col justify-start items-baseline">
                            <h1 className="text-2-xl font-bold mb-0 text-yellow-900 font-sans">
                                Explore Bicycles
                            </h1>
                            <span className="text-xs text-indigo-700 mt-0">by Mongo Bicycle Shop</span>
                        </div>
                        <p className="text-xl text-white  w-4/5">
                            Ergonimical for human body curv
                        </p>
                        <div className="w-full flex justify-between items-center">
                            <h1 className="font-bold text-gray-900"> From $100</h1>
                            <br />
                            <br />
                            <Link to="/products"><button
                                className="bg-blue-700 mr-5 text-white px-3 py-1 rounded-sm shadow-md"
                            >
                                Explore
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
};

export default ExploreProducts;