import React from 'react'
import Image from 'next/image'
const MoviePage = async ({ params }) => {
  const movieID = params.id;
  //get movie
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.API_KEY}`);
  const movie = await res.json();

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-5xl mx-auto md:space-x-6">
        {/* <h1>movie: {movie.title}</h1> */}
        <Image 
        src={`https://tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`} 
        width={500} 
        height={300}
        alt="movie poster large"
        className="rounded-lg"
        //placeholder="blur"
        //blurDataURL=""
        style={{maxWidth: "100%", height: "100%"}}
        >
        </Image>
        <div className="p-2">
          <h2 className="text-lg mb-3">{movie.title}</h2>
          <span className="font-semibold mr-1">overview:</span>
          <p>{movie.overview}</p>
        </div>
      </div>
      
    </div>
  )
}

export default MoviePage