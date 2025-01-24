import React from 'react'

import { useState, useEffect } from 'react';
import Review from './Review.jsx';
import Spinner from './Spinner.jsx';
import supabase from '../supabaseClient.js';


const Reviews = ({ isHome = false }) => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchThreeReviews = async () => {
            const {data, error} = await supabase
            .from('reviews')
            .select('*')
            .order('id', {ascending: false})
            .limit(3);
            
            if (error) {
                console.log('Error fetching data:', error)
            } else {
                setReviews(data);
                setLoading(false);
            }
        }

        const fetchAllReviews = async () => {
            const {data, error} = await supabase
            .from('reviews')
            .select('*')
            .order('id', {ascending: false})
            
            if (error) {
                console.log('Error fetching data:', error)
            } else {
                setReviews(data);
                setLoading(false);
            }
        }

        isHome ? fetchThreeReviews() : fetchAllReviews();
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