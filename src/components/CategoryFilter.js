import React, { useState } from "react";

function CategoryFilter({ categories, selectCategory }) {

  // const [buttonColor, setButtonColor] = useState(false);

  function handleCategory(e) {
    e.target.classList.add("selected");
    // console.dir(e.target.textContent)
    selectCategory(e.target.textContent);
  }

  const displayButtonsIndividually = categories.map(category => {
    return (
      <button key={category} onClick={handleCategory}>{category}</button>
    )
  });
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {displayButtonsIndividually}
    </div>
  );
}

export default CategoryFilter;