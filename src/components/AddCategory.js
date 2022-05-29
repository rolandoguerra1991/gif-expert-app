import React, { Fragment, useState } from "react";
import PropTypes from 'prop-types';

export default function AddCategory({ setCategories }) {

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((categories) => [inputValue, ...categories]);
      setInputValue("");
    }
  }

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={inputValue} 
          onChange={handleInputChange}
        />
      </form>
    </Fragment>
  );
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
}
