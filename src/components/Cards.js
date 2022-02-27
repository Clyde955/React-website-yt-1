import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Cape Town jungles'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='/images/LUX.jpg'
              text='Experience the luxurious apartments, restaurants and hotels '
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='/images/QB2.jpg'
              text='Experience quadbiking in the sand dunes'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='/images/SKYD.jpg'
              text='Go skydiving and ziplining.'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
