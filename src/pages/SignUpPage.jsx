import React from 'react'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SignUpPage = ({ createAccount }) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault();

        const user = {
            username,
            password
        }

        createAccount(user);

        toast.success('Account created successfully');

        return navigate('/');
    }

  return (
    <section className="bg-gray-100">
        <div className="container m-auto max-w-2xl py-24">
            <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                <form onSubmit={submitForm}>

                    <h2 className='text-3xl text-center font-semibold mb-6'>Sign Up</h2>
                    
                    <div className='mb-4'>
                        <label className="block text-gray-700 font-bold mb-2"
                            >Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="border rounded w-full py-2 px-3 mb-2"
                            placeholder="eg. Bob M, CoffeeLover12"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    
                    <div className='mb-4'>
                        <label className="block text-gray-700 font-bold mb-2"
                            >Password
                        </label>
                        <input
                            type="text"
                            id="password"
                            name="password"
                            className="border rounded w-full py-2 px-3 mb-2"
                            placeholder=""
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <button
                            className="bg-yellow-900 hover:bg-yellow-950 text-white font-bold py-2 px-4 rounded-full w-full     focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                        Create Account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default SignUpPage