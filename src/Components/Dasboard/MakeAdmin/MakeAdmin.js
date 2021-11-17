import React, { useState } from 'react';



const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);



    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        console.log(user)
        fetch('https://fierce-wildwood-43514.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {

                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);

                    setSuccess(true);

                }
            })

        e.preventDefault()
    }
    return (
        <div className="bg-gray-200">
            <h2 className="text-center mr-64">Make An Admin</h2>

            <form onSubmit={handleAdminSubmit}>
                <div className="grid grid-cols-2 gap-4 max-w-xl m-auto">



                    <div className="col-span-2 lg:col-span-1">
                        <input onBlur={handleOnBlur} type="text" className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full" placeholder="Email Address" />
                    </div>



                    <div className="col-span-2 ">
                        <input className="border-2 bg-blue-800 ml-24 rounded-md text-white py-1 px-2" type="submit" />
                    </div>

                </div>
            </form>

            {success && <alert >Made Admin successfully!</alert>}
        </div >
    );
};

export default MakeAdmin;