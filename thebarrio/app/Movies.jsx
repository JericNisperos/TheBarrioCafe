"use client"
import Image from 'next/image';
import React from 'react'

function Movies({movie}) {
    const image_path = "https://image.tmdb.org/t/p/original/";
    const date = new Date(movie.release_date);
    const dateFinal = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <div className='border-2 rounded '>
      <h1 className='text-center text-green-400 text-lg'>{movie.title}</h1>
      <Image alt={movie.id} src={image_path + movie.poster_path} width={1000} height={1000} />
      <h1 className='text-center text-xs absolute bottom-0 w-full'>{dateFinal}</h1>
      </div>
  )
}

export default Movies