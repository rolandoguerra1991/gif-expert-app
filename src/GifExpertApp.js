import React, { Fragment, useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

export default function GifExpertApp() {
  
  const [categories, setCategories] = useState([]);

  return (
    <Fragment>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories} />
        <hr />
        <ul>
          {
            categories.map(category => (
              <GifGrid key={category} category={category} />
            ))
          }
        </ul>
    </Fragment>
  )
}
