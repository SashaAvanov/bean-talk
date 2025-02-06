import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ReviewsPage from './pages/ReviewsPage';
import NotFoundPage from './pages/NotFoundPage';
import ReviewPage, {reviewLoader} from './pages/ReviewPage';
import AddReviewPage from './pages/AddReviewPage';
import EditReviewPage from './pages/EditReviewPage';
import supabase from './supabaseClient.js'
// import SignUpPage from './pages/SignUpPage';

const App = () => {

  // Add New Review

  const addReview = async (newReview) => {
      console.log(newReview)
      const {data, error} = await supabase
      .from('reviews')
      .insert([{
          company: newReview.company,
          coffee_name: newReview.coffeeName,
          type: newReview.type,
          review_text: newReview.reviewText,
          purchase_place: newReview.purchasePlace,
          price: newReview.price,
          rating: newReview.rating
      }]);
      if (error) {
          console.log('Error adding review:', error)
      } else {
          return
      }
  };

  // Delete Review

  const deleteReview = async (id) => {
      const {error} = await supabase
      .from('reviews')
      .delete()
      .eq('id', id);
      if (error) {
          console.log('Error deleting review:', error)
      } else {
          return
      }
  };

  // Update Review

  const updateReview = async (updatedReview) => {
      const {error} = await supabase
      .from('reviews')
      .update({
          company: updatedReview.company,
          coffee_name: updatedReview.coffeeName,
          type: updatedReview.type,
          review_text: updatedReview.reviewText,
          purchase_place: updatedReview.purchasePlace,
          price: updatedReview.price,
          rating: updatedReview.rating
      })
      .eq('id', updatedReview.id);
      if (error) {
        console.log('Error updating review:', error)
      } else {
        return
      }
  };
 
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