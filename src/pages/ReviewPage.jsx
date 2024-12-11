import React from 'react'

import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaStore } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const ReviewPage = ({ deleteReview }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const review = useLoaderData();
    
    const onDeleteClick = (reviewId) => {
      const confirm = window.confirm('Are you sure you want to delete this listing?')

      if(!confirm) return;

      deleteReview(reviewId);

      toast.success('Job deleted successfully');

      navigate('/reviews');
    }

    return (
        <>
    <section>
      <div className="container m-auto py-6 px-6">
        <Link
          to="/reviews"
          className="text-yellow-900 hover:text-yellow-950 flex items-center"
        >
          <FaArrowLeft className='mr-2'/> Back to Reviews
        </Link>
      </div>
    </section>

    <section className="bg-indigo-50">
      <div className="container m-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
          <main>
            <div
              className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
            >
              <div className="text-gray-500 mb-4">{review.type}</div>
              <h1 className="text-3xl font-bold mb-4">
                {review.company}: {review.coffeeName}
              </h1>
              <div
                className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
              >
                <FaStore className='text-yellow-900 mr-1 mt-0.5'/>
                <p className="text-yellow-900">{review.purchasePlace}</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-yellow-900 text-lg font-bold mb-4">
                Review
              </h3>

              <p className="mb-4">{review.reviewText}</p>

              <h3 className="text-yellow-900 text-lg font-bold mb-2">Price/Unit</h3>

              <p className="mb-4">{review.price}</p>

              <h3 className="text-yellow-900 text-lg font-bold mb-2">Rating</h3>

              <p className='mb-4'>{review.rating}/10</p>
            </div>
          </main>

          {/* 
          ADD JS TO CHECK IF USER IS POST CREATOR. 
          If so, show sidebar
          If not, style <main> to be centered
          */}
          {/* <!-- Manage Review Sidebar --> */}
          <aside>            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6">Manage Review</h3>
              <Link
                to={ `/edit-review/${review.id}` }
                className="bg-yellow-900 hover:bg-yellow-950 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >Edit Review
              </Link>
              <button onClick={ () => onDeleteClick(review.id) }
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              >
                Delete Review
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
        </>
    )
}

const reviewLoader = async ({ params }) => {
    const res = await fetch(`/api/reviews/${params.id}`);
    const data = await res.json();
    return data;
}

export { ReviewPage as default, reviewLoader };