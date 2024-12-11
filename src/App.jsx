import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ReviewsPage from './pages/ReviewsPage';
import NotFoundPage from './pages/NotFoundPage';
import ReviewPage, {reviewLoader} from './pages/ReviewPage';
import AddReviewPage from './pages/AddReviewPage';
import EditReviewPage from './pages/EditReviewPage';
// import SignUpPage from './pages/SignUpPage';

const App = () => {

  // Add New Review

  const addReview = async (newReview) => {
    const res = await fetch('/api/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newReview)
    });
    return;
  };

  // Delete Review

  const deleteReview = async (id) => {
    const res = await fetch(`/api/reviews/${id}`, {
      method: 'DELETE'
    });
    return;
  }

  // Update Review

  const updateReview = async (review) => {
    const res = await fetch(`/api/reviews/${review.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(review)
    });
    return;
  }
 
  const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/reviews' element={<ReviewsPage />} />
          <Route path='/add-review' element={<AddReviewPage addReviewSubmit={addReview} />} />
          <Route path='/edit-review/:id' element={<EditReviewPage updateReviewSubmit={updateReview} />} loader={reviewLoader} />
          <Route path='/reviews/:id' element={<ReviewPage deleteReview={deleteReview} />} loader={reviewLoader} />
          <Route path='*' element={<NotFoundPage />} />
          {/* <Route path='/sign-up' element={<SignUpPage />} /> */}
        </Route>
      )
  );

  return <RouterProvider router={router} />;

};

export default App