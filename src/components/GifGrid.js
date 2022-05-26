import React, { Fragment } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';

export default function GifGrid({category}) {

  const { data, loading } = useFetchGifs(category);

  const loadingHtML = <p>Loading</p>

  return (
    <Fragment>
      <h3>{category}</h3>
      { loading && loadingHtML }
      <div className='card-grid'>
        {
          data.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))
        }
      </div>
    </Fragment>
  )
}
