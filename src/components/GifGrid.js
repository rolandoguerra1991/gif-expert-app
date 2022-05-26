import React, { Fragment } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import GifGridItem from './GifGridItem';

export default function GifGrid({category}) {
  const { data, loading } = useFetchGifs(category);
  console.log(data);
  return (
    <Fragment>
      <h3>{category}</h3>
      {/* <div className='card-grid'>
        {
          images.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))
        }
      </div> */}
    </Fragment>
  )
}
