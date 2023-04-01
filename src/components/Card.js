import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ result }) => {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 group sm:m-2 transition-shadow duration-200">
      <h1>{result.original_title || result.name}</h1>
      <h3>{result.release_date}</h3>
      <Link href={`/movie/${result.id}`}>
        <Image 
        src={`https://tmdb.org/t/p/original${result.backdrop_path || result.poster_path}`} 
        width={500} 
        height={300}
        alt="movie poster"
        className="sm:rounded-t-lg group-hover:opacity-80 transition duration-200"
        //placeholder="blur"
        //blurDataURL=""
        style={{maxWidth: "100%", height: "auto"}}
        >
        </Image>
      </Link>
    </div>
  );
};

export default Card;
