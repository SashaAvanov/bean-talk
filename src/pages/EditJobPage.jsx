import React from 'react'

import { useState } from 'react';
import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditJobPage = ({ updateJobSubmit }) => {
    const job = useLoaderData();

    const [company, setCompany] = useState(job.company);
    const [name, setName] = useState(job.name);
    const [type, setType] = useState(job.type);
    const [review, setReview] = useState(job.review);
    const [purchasePlace, setPurchasePlace] = useState(job.purchasePlace);
    const [price, setPrice] = useState(job.price);
    const [rating, setRating] = useState(job.rating)

    const navigate = useNavigate();
    const { id } = useParams();

    const submitForm = (e) => {
        e.preventDefault();

        const updatedJob = {
            id,
            company,
            name,
            type,
            purchasePlace,
            review,
            price,
            rating
        }

        updateJobSubmit(updatedJob);

        toast.success('Job updated successfully');

        return navigate(`/jobs/${id}`);
    }

    return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div
          className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">Update Job</h2>

            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                >Coffee Type
              </label>
              <select
                id="type"
                name="type"
                className="border rounded w-full py-2 px-3"
                required
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="Ground/Whole Bean">Ground/Whole Bean</option>
                <option value="Espresso">Espresso</option>
                <option value="In-Store">In-Store</option>
                <option value="Pod">Pod</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Brand/Roaster/Café</label
              >
              <input
                type="text"
                id="company"
                name="company"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Good & Gather, Temple Coffee Roasters, Vibrant Coffee"
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Coffee Name</label
              >
              <input
                type="text"
                id="name"
                name="name"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Ethiopian Yirgacheffe, Latte"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="review"
                className="block text-gray-700 font-bold mb-2"
                >Review</label
              >
              <textarea
                id="review"
                name="review"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Tell us all about it! Flavor notes? Favorite way to brew? Is it a seasonal drink from your favorite cafe?"
                value={review}
                onChange={(e) => setReview(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                >Price/Unit</label
              >
              <input
                type='text'
                id="price"
                name="price"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder='e.g. $7.99/Bag, $2.99/Cup'
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Purchase Place
              </label>
              <input
                type='text'
                id='purchasePlace'
                name='purchasePlace'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='e.g. Target, Temple Coffee, Nespresso.com'
                required
                value={purchasePlace}
                onChange={(e) => setPurchasePlace(e.target.value)}           
              />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Rating
              </label>
              <input
                type='text'
                id='rating'
                name='rating'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='Please rate from 1-10 with 10 being best'
                required
                value={rating}
                onChange={(e) => setRating(e.target.value)}           
              />
            </div>

            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Update Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    )
}

export default EditJobPage