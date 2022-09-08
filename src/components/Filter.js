import React from "react";

function Filter ( { filter, setFilter }) {
  
  function handleFilterClick() {
    setFilter(!filter)
  };


  return (
    <div id="filter-div">
      <button id="good-dog-filter" onClick={handleFilterClick}>{filter ? "Filter good dogs: ON": "Filter good dogs: OFF"}</button>
    </div>
  )
};

export default Filter;