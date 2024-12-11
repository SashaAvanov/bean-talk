import React from 'react'

import { Link } from 'react-router-dom'

const ViewAllReviews = () => {
  return (
    <section className="m-auto max-w-lg my-10 px-6">
      <Link to="/reviews" className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">
        View All Reviews
      </Link>
    </section> 
  )
}

export default ViewAllReviews