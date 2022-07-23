import React from "react";

function CategoryFilter({categories, handleSelect}) {

  

  return (
    <div className="categories">
      <h5>Category filters</h5>
        <button name={categories[0]} onClick={handleSelect}>{categories[0]}</button>
        <button name={categories[1]} onClick={handleSelect}>{categories[1]}</button>
        <button name={categories[2]} onClick={handleSelect}>{categories[2]}</button>
        <button name={categories[3]} onClick={handleSelect}>{categories[3]}</button>
        <button name={categories[4]} onClick={handleSelect}>{categories[4]}</button>
    </div>
  );
}

export default CategoryFilter;
