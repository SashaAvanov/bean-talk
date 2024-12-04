import React from 'react'

import { useState } from 'react';
import { FaStore } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const JobListing = ({ job }) => {
    const [showFullDescription, setShowFullDescription] = useState(false)

    let review = job.review;

    if (!showFullDescription) {
        review = review.substring(0, 90) + '...';
    }

    return (
        <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
            <div className="mb-6">
                <div className="text-gray-600 my-2">{ job.type }</div>
                <h3 className="text-xl font-bold">{ job.company }: { job.name }</h3>
            </div>
    
            <div className="mb-5">{ review }</div>

            <button onClick={() => setShowFullDescription((prevState) => !prevState)} className="text-yellow-700 mb-5 hover:text-yellow-800">
                { showFullDescription ? 'Less' : 'More' }
            </button>
    
            <h3 className="text-yellow-700 mb-2">Rating: { job.rating }/10</h3>
    
            <div className="border border-gray-100 mb-5"></div>
    
            <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="text-yellow-900 mb-3">
                <FaStore className='inline text-lg mb-1 mr-1' />
                { job.purchasePlace }
                </div>
                <Link
                to={`/jobs/${job.id}`}
                className="h-[36px] bg-yellow-900 hover:bg-yellow-950 text-white px-4 py-2 rounded-lg text-center  text-sm"
                >
                Read More
                </Link>
            </div>
            </div>
        </div>
    )
}

export default JobListing