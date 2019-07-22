import React from 'react';
// import logo from './logo.svg';
import './FoodApp.css';
import Food from './Food'

function FoodApp() {
  return (
    <div className="App">
      <Food 
      name="Spaggetti" 
      ingridents={['flour', 'water', 'tomatoes']} 
      img = "sgeti.jpeg"
      instructions = 'follow instructions on the packet'
      details = {[
        {name:"Spaggetti" ,img: "sgeti.jpeg", instructions : 'follow instructions on the packet',ingridents:['flour', 'water', 'tomatoes'] },
      ]}
      />
    </div>
  );
}

export default FoodApp;
