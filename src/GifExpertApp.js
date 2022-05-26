import React, { Fragment, useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

export default function GifExpertApp() {
  const [categories, setCategories] = useState([]);

  // const handleAdd = () => {
  //   setCategories([...categories, 'Caballeros de Zodiaco']);
  // }

  return (
    <Fragment>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories} categories={categories}/>
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
