import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Payment = () => {
    return (
        <div className="text-center">

            <div class="mx-auto pt-15">
                <div class="grid gap-6 mb-8 md:grid-cols-2">
                    <div class="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                        <h4 class="mb-4 font-semibold text-gray-600 dark:text-gray-300">
                            Payment Methods
                        </h4>
                        <p class="text-gray-600 dark:text-gray-400">
                            Our payment methods are coming soon.
                        </p>
                        <Button><Link className="text-white" to="/home">Go Back To Home</Link></Button>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Payment;