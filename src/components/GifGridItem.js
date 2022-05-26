import React from 'react'

export default function GifGridItem({ id, title, url }) {
  return (
    <div className='card animate__animated animate__headShake'>
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}
