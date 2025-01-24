import React from 'react'

import { useState } from 'react';
import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditReviewPage = ({ updateReviewSubmit }) => {
    const review = useLoaderData();

    const [company, setCompany] = useState(review.company);
    const [coffeeName, setCoffeeName] = useState(review.coffee_name);
    const [type, setType] = useState(review.type);
    const [reviewText, setReviewText] = useState(review.review_text);
    const [purchasePlace, setPurchasePlace] = useState(review.purchase_place);
    const [price, setPrice] = useState(review.price);
    const [rating, setRating] = useState(review.rating)

    const navigate = useNavigate();
    const { id } = useParams();

    const submitForm = (e) => {
        e.preventDefault();

        const updatedReview = {
            id,
            company,
            coffeeName,
            type,
            purchasePlace,
            reviewText,
            price,
            rating
        }

        updateReviewSubmit(updatedReview);

        toast.success('Review updated successfully');

        return navigate(`/reviews/${id}`);
    }

    return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div
          className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">Update Review</h2>

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
                name="coffeeName"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Ethiopian Yirgacheffe, Latte"
                required
                value={coffeeName}
                onChange={(e) => setCoffeeName(e.target.value)}
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
                name="reviewText"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Tell us all about it! Flavor notes? Favorite way to brew? Is it a seasonal drink from your favorite cafe?"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
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
                className="bg-yellow-900 hover:bg-yellow-950 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Update Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    )
}

export default EditReviewPage