
"use client";

import { Carousel } from "flowbite-react";
import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";

interface Movie {
    title: string;
    poster: string;
    backdrops: string[];
    trailerLink: string;
    imdbId: string;
}

interface CarousalProps {
    movies: Movie[];
}

const Carousal: React.FC<CarousalProps> = ({ movies }) => {
  return (
    <div className="relative w-full h-[97vh]">
      <Carousel>
        {movies.map((movie, index) => (
            <div className="relative w-full h-full overflow-hidden rounded-lg bg-slate-900">
                 <div className="absolute flex justify-evenly items-center top-0 left-0 w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${movie.backdrops[0]})` }}>
                    <Link href={`/movie/${movie.imdbId}`} className="cursor-pointer">
                        <img
                            src={movie.poster}
                            className="lg:absolute top-[200px] left-[20vw] w-64 h-96"
                            alt={movie.title}
                        />
                    </Link>
                    <div className="lg:absolute cursor-pointer flex justify-evenly sm:flex-col lg:flex-row items-center w-[50vw] h-[50vh] left-[30vw] bottom-28">
                        <div className="flex justify-center items-center text-center">
                            <Link href={`/trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                <FaPlayCircle className="w-32 h-32 text-yellow-300"/>
                            </Link>
                        </div>
                        
                        
                        <div className="">
                            <Link href={`/movie/${movie.imdbId}`}>
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-4xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                <MdRateReview className="w-28 h-28"/>
                            </button>
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        ))}
      </Carousel>
    </div>
  );
}
export default Carousal;