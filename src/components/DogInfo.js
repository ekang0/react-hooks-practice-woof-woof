import React from "react";

function DogInfo( { displayDog, onUpdateDog }){
  
  if (!displayDog) return <h3>Select a dog</h3>;

  const { id, name, isGoodDog, image } = displayDog

  function handleGoodBadClick() {
    fetch(`http://localhost:3001/pups/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({isGoodDog : !isGoodDog}),
    })
    .then(r => r.json())
    .then( updatedDog => onUpdateDog(updatedDog))
  };

  return (
    <div id="dog-summary-container">
      <h1>DOGGO:</h1>
      <div id="dog-info" key={id}>
        <img src={image} alt={name}></img>
        <h2>{name}</h2>
        <button onClick={handleGoodBadClick}>{ isGoodDog ? "Good Dog!" : "Bad Dog!" }</button>
      </div>
    </div>
  )
};

export default DogInfo;