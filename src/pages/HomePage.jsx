import React from 'react'

import Hero from '../components/Hero'
import Reviews from '../components/Reviews'
import ViewAllReviews from '../components/ViewAllReviews'

const HomePage = () => {
  return (
    <>
        <Hero />
        <Reviews isHome={true} />
        <ViewAllReviews />
    </>
  )
}

export default HomePage