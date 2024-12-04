import React from 'react'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddJobPage = ({ addJobSubmit }) => {
    const [company, setCompany] = useState();
    const [name, setName] = useState();
    const [type, setType] = useState('Ground');
    const [review, setReview] = useState();
    const [purchasePlace, setPurchasePlace] = useState();
    const [price, setPrice] = useState();
    const [rating, setRating] = useState();

    const navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault();

        const newJob = {
            company,
            name,
            type,
            review,
            purchasePlace,
            price,
            rating
        }

        addJobSubmit(newJob);

        toast.success('Job added successfully');

        return navigate('/jobs');
    }

  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div
          className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">Add Review</h2>

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
            {/*             
            <h3 className="text-2xl mb-5">Company Info</h3>

            <div className="mb-4">
              <label htmlFor="company" className="block text-gray-700 font-bold mb-2"
                >Company Name</label
              >
              <input
                type="text"
                id="company"
                name="company"
                className="border rounded w-full py-2 px-3"
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="company_description"
                className="block text-gray-700 font-bold mb-2"
                >Company Description</label
              >
              <textarea
                id="company_description"
                name="company_description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="What does your company do?"
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="contact_email"
                className="block text-gray-700 font-bold mb-2"
                >Contact Email</label
              >
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                className="border rounded w-full py-2 px-3"
                placeholder="Email address for applicants"
                required
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contact_phone"
                className="block text-gray-700 font-bold mb-2"
                >Contact Phone</label
              >
              <input
                type="tel"
                id="contact_phone"
                name="contact_phone"
                className="border rounded w-full py-2 px-3"
                placeholder="Optional phone for applicants"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
              />
            </div> 
            */}

            <div>
              <button
                className="bg-yellow-900 hover:bg-yellow-950 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default AddJobPage