import React, { useState, useEffect } from "react";
import DogBar from "./DogBar";
import DogInfo from "./DogInfo";
import Filter from "./Filter";

function App() {
  const [dogsList, setDogsList] = useState([]);
  const [selectedDogId, setselectedDogId] = useState(null);
  const [filter, setFilter] = useState(false);

  useEffect( () => {
    fetch("http://localhost:3001/pups")
    .then(r => r.json())
    .then(dogs => setDogsList(dogs))
  }, []);

  let displayDogs = dogsList;

  if(filter === true){
    const goodDogList = dogsList.filter((dog) => dog.isGoodDog === true);
    displayDogs = goodDogList
  };
  
  function handleDogClick(id){
    //console.log(id);
    setselectedDogId(id);
  };

  const selectedDog = dogsList.find((dog) => dog.id === selectedDogId
  );

  function handleDogUpdate(updatedDog){
    //console.log("App Comp", updatedDog);
    const updatedDogsList = dogsList.map((dog) => dog.id === updatedDog.id ? updatedDog : dog );
    setDogsList(updatedDogsList);
    //console.log(updatedDogsList)
  };

  return (
    <div className="App">
      <Filter filter={filter} setFilter={setFilter}/> 

      <DogBar dogs={displayDogs} onClickDog={handleDogClick}/>

      <DogInfo displayDog={selectedDog} onUpdateDog={handleDogUpdate}/>
    </div>
  );
}

export default App;
