import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

import Tunis from '../images/I-love-tunis.jpg';
import Ain_Drahem from '../images/ain_drahem-tunis.jpg';
import Tabarka from '../images/tabarka-tunis.jpg';
import Sidi_Bou_Said from '../images/sidi-bou-said.jpg';
import Sousse from '../images/tunisia-sousse.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Tabarka}
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Tabarka'
              path='/services'
            />
            <CardItem
              src={Ain_Drahem}
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Ain_Drahem'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={Tunis}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Tunis'
              path='/services'
            />
            <CardItem
              src={Sidi_Bou_Said}
              text='Experience Football on Top of the Himilayan Mountains'
              label='Sidi_Bou_Said'
              path='/products'
            />
            <CardItem
              src={Sousse}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Sousse'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;