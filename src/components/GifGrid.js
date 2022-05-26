import React, { useState, useEffect, Fragment } from 'react'
import GifGridItem from './GifGridItem';
export default function GifGrid({category}) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGift();
  }, []);

  const getGift = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?q=Goku&api_key=gwYmNzCsQm0Yct0CzJ1umliYT3pp6lo6`;
    const resp = await fetch(url)
    const { data } = await resp.json();
    const gifs = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }
    });
    setImages(gifs);
  }

  return (
    <Fragment>
      <h3>{category}</h3>
      <div className='card-grid'>
        {
          images.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))
        }
      </div>
    </Fragment>
  )
}
