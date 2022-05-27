import React from 'react'
import PropTypes from 'prop-types';

export default function GifGridItem({ id, title, url }) {
  return (
    <div className='card animate__animated animate__headShake'>
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}

GifGridItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};