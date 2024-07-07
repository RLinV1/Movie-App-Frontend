// pages/movies.tsx
"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import Carousal  from './components/CarousalReact';

interface Movie {
    title: string;
    poster: string;
    backdrops: string[];
    trailerLink: string;
    imdbId: string;
}

const MoviesPage: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchMovies = async () => {
    try {
      const apiUrl = '/api/getAllMovies'; // This will proxy to pages/api/movies.ts
      const response = await axios.get(apiUrl);
      console.log(response);
      setMovies(response.data);
    } catch (error: any) {
      console.error('Error fetching movies:', error.message);
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className='w-full h-full '>
      {/* <h1>Movies List</h1> */}
      <div className='w-full'>
          <Carousal movies={movies}/>
      </div>
    </div>
  );
};

export default MoviesPage;
