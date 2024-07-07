"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';

// Define the Movie interface
interface Movie {
  title: string;
  poster: string;
  backdrops: string[];
  trailerLink: string;
  reviews: string[];
}
interface Review {
  id: any;
  imdbId: string;
  body: string;
}
const MovieComponent = ({ params }: { params: { imdbId: string } }) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);

  // Fetch movie data from the API
  const fetchMovie = async () => {
    try {
      const apiUrl = `/api/getMovie/${params.imdbId}`; // Use absolute URL
      const response = await axios.get(apiUrl);
      setMovie(response.data);
      // console.log(response.data);
    } catch (error: any) {
      console.error('Error fetching movie:', error.message);
    }
  };
  const fetchReviews = async() => {
    try {
      const apiUrl = `https://movie-app-backend-pg9u.onrender.com/api/v1/reviews/${params.imdbId}`; // Use absolute URL
      const response = await axios.get(apiUrl);
      setReviews(response.data);
      // console.log(response.data);
    } catch (error: any) {
      console.error('Error fetching movie:', error.message);
    }
  }

  useEffect(() => {
    fetchMovie();
    fetchReviews();
  }, []);

  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setComment(comment);
    createReview();
    const updatedReviews = [{ body: comment, id: "20", imdbId: params.imdbId }, ...reviews]
    setReviews(updatedReviews);
  }

  const createReview = async() =>{
    try {
      const apiUrl = 'https://movie-app-backend-pg9u.onrender.com/api/v1/reviews';
      const response = await axios.post(apiUrl, {
        reviewBody: comment,
        imdbId: params.imdbId
      });
      // console.log(response.data);
    } catch (error: any) {
      console.error('Error fetching movie:', error.message);
    }
  }
  

  // Render the movie data
  return (
    <div>
      {movie ? (
        <div className='flex items-center h-screen flex-col md:flex-row bg-slate-900'>
          <div className='lg:mx-32 font-bold'>
            <img src={movie.poster} alt={movie.title} />
            <h1 className='text-2xl text-center'>{movie.title}</h1>
          </div>
          <div className='flex flex-col w-full items-center text-center justify-center bg-slate-900'>
            <h1 className='text-2xl font-bold text-center mt-12'>Comment a Review</h1>
            <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto my-4">
              <div className="mb-4">
                <textarea
                  className="w-full p-2 bg-blue-500 text-white border rounded-lg"
                  rows={4}
                  placeholder="Write your comment here..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                Comment
              </button>
            </form>
            <h2 className="text-lg font-bold my-4">Reviews</h2>
            <div className='flex justify-center flex-col items-center w-full h-80 overflow-hidden'>
              {reviews?.map((review: Review, index) => (
                <div key={index} className='text-white w-[50%] py-1'>
                  <hr />
                  {review.body}
                </div>
              ))}
            </div>
            {reviews.length > 1&& (
              <span className='mt-4'>Continued...</span>
            )}
            
          </div>
        </div>
        
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default MovieComponent;
