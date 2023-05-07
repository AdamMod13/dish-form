import React from 'react';
import './App.css';
import DishForm from './components/DishForm/DishForm';
import pizzaPhoto from './pictures/pizza.jpg';
import sandwichPhoto from './pictures/sandwich.jpg';
import soupPhoto from './pictures/soup.jpeg';

function App() {
  return (
    <React.Fragment>
      <div className='absolute flex flex-col lg:flex-row w-full h-full'>
        <img src={pizzaPhoto} alt="pizza" className='h-1/3 lg:w-1/3 lg:h-full object-cover'/>
        <img src={sandwichPhoto} alt="sandwich" className='h-1/3 lg:w-1/3 lg:h-full object-cover'/>
        <img src={soupPhoto} alt="soup" className='h-1/3 lg:w-1/3 lg:h-full object-cover'/>
      </div>
      <div className='absolute w-full h-full bg-black opacity-70'></div>
      <DishForm/>
    </React.Fragment>
  );
}

export default App;
