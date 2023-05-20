//CategoryFilter.js
import React, {useState} from "react";

function CategoryFilter( { categories, clickedCategory, selectedCategory, setSelectedCategory, onSelectCategory } ) {
    // const [selectedCategory, setSelectedCategory] =useState(null);
  
  function handleButtonClick(category){
      setSelectedCategory(category); 
      onSelectCategory(category)
    }

  const categoryDisplayed = categories.map((category)=>{
    return (<button key={category}
                    onClick={()=>handleButtonClick(category)}
                    className={selectedCategory === category ? "selected" : ""}>{category}</button>)                 
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoryDisplayed}
    </div>
  );
}

export default CategoryFilter;
