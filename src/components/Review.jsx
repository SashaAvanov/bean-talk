import React from 'react'

import { useState } from 'react';
import { FaStore } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Review = ({ review }) => {
    const [showFullDescription, setShowFullDescription] = useState(false)

    let actualReview = review.reviewText;

    if (!showFullDescription) {
        actualReview = actualReview.substring(0, 90) + '...';
    }

    return (
        <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
            <div className="mb-6">
                <div className="text-gray-600 my-2">{ review.type }</div>
                <h3 className="text-xl font-bold">{ review.company }: { review.coffeeName }</h3>
            </div>
    
            <div className="mb-5">{ actualReview }</div>

            <button onClick={() => setShowFullDescription((prevState) => !prevState)} className="text-yellow-700 mb-5 hover:text-yellow-800">
                { showFullDescription ? 'Less' : 'More' }
            </button>
    
            <h3 className="text-yellow-700 mb-2">Rating: { review.rating }/10</h3>
    
            <div className="border border-gray-100 mb-5"></div>
    
            <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="text-yellow-900 mb-3">
                <FaStore className='inline text-lg mb-1 mr-1' />
                { review.purchasePlace }
                </div>
                <Link
                to={`/reviews/${review.id}`}
                className="h-[36px] bg-yellow-900 hover:bg-yellow-950 text-white px-4 py-2 rounded-lg text-center  text-sm"
                >
                Read More
                </Link>
            </div>
            </div>
        </div>
    )
}

export default Review