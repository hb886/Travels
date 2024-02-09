import React from 'react';
import CardItem from './CardItem';
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out thses EPIC Destinations!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src="images/img-9.jpg"
                    text="Explore the hidden waterfall deep inside the Amzone JUngle"
                    label="Adventure"
                    path="/Services"
                    />

                   <CardItem 
                    src="images/img-2.jpg"
                    text="Explore the hidden waterfall deep inside the Amzone JUngle"
                    label="Luxury"
                    path="/Services"
                    />

                </ul>

                <ul className='cards__items'>
<CardItem 
                    src="images/img-3.jpg"
                    text="Experience Football on Top of the Himilayan Mountains"
                    label="Mystery"
                    path="/Services"
                    />

<CardItem 
                    src="images/img-4.jpg"
                    text="Ride through the Sahara Desert on a guided camel tour"
                    label="Adventure"
                    path="/Services"
                    />

<CardItem 
                    src="images/img-8.jpg"
                    text="Explore the hidden waterfall deep inside the Amzone JUngle"
                    label="Adrenaline"
                    path="/Services"
                    />

                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards;
