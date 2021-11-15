import React from 'react';
import { Link } from 'react-router-dom';

const SelectedProduct = (props) => {
    console.log(props.product)
    const { _id, name, img } = props.product
    return (
        <div>
            <section className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mt-12 mb-12">
                <article>

                    <section className="mt-6 ">
                        <article className="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200">
                            <div className="relative w-full h-80 md:h-64 lg:h-44">
                                <img src={img}
                                    alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                                    className="w-full h-full object-center object-cover" />
                            </div>
                            <div className="px-3 py-4">
                                <h3 className="text-sm text-gray-500 pb-2">
                                    <h6 className="bg-indigo-400 text-center py-1 px-2   text-black rounded-lg">

                                        {name}
                                    </h6>
                                </h3>
                                <p className="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <Link to={`/product/${_id}`}><button className="bg-blue-500 text-center pl-24 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Purchase
                                </button></Link>
                            </div>

                        </article>

                    </section>
                </article>
            </section>

        </div>
    );
};

export default SelectedProduct;