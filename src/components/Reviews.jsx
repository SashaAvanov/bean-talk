import React from 'react'

import { useState, useEffect } from 'react';
import Review from './Review';
import Spinner from './Spinner';


const Reviews = ({ isHome = false }) => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReviews = async () => {
            const apiUrl = isHome ? '/api/reviews?_limit=3' : '/api/reviews';
            try {
                const res = await fetch(apiUrl);
                const data = await res.json();
                setReviews(data);
            } catch (error) {
                console.log('Error fetching data', error)
            } finally {
                setLoading(false)
            }
        }
        fetchReviews();
    }, []);

    return (
        <section className="bg-yellow-800 px-4 py-10">
            <div className="container-xl lg:container m-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
                {isHome ? 'Recent Reviews' : 'Browse Reviews'}
            </h2>
            
                { loading ? (
                    <Spinner loading={loading} />
                ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {reviews.map((review) => (
                    <Review key={ review.id } review={ review } />
                    ))}
                </div>
                )}
            </div>
        </section>
  );
}

export default Reviews