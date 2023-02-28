import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import FoodTruckFavorites from './components/foodTruckFavorites.jsx';

const App = () => {
    const foodTrucks = [
        {
          name: 'Halal 5',
          type: 'Arabic',
          image: 'images/Halal 5.jpg',
          rating: 4.5,
          link: 'https://www.halal5tx.us/',
        },
        {
          name: 'Halal Guys',
          type: 'Arabic',
          image: 'images/Halal Guys.jpg',
          rating: 4.2,
          link: 'https://thehalalguys.com/',
        },
        {
          name: 'Jibek Jolu',
          type: 'Kyrgyz',
          image: 'images/Jibek Jolu.jpg',
          rating: 4.8,
          link: 'https://jibekjolu.us/glenview/',
        },
        {
          name: 'Dimassis',
          type: 'Mediterranean',
          image: 'images/Dimassis.jpg',
          rating: 4.8,
          link: 'https://dimassis.com/',
        },
        {
          name: 'Abu Omar Halal',
          type: 'Arabic',
          image: 'images/Abu Omar Halal.jpg',
          rating: 4.8,
          link: 'https://abuomarhalal.com/',
        },
        {
          name: 'Pasha Turkish Restaurant',
          type: 'Turkish',
          image: 'images/Pahsa.jpg',
          rating: 4.8,
          link: 'https://www.epasha.com/',
        },
        {
          name: 'CZN Burak',
          type: 'Turkish',
          image: 'images/CZN Burak.jpg',
          rating: 4.8,
          link: 'https://www.cznburak.com/',
        },
        {
          name: 'Aga Indo-Pak Restaurant',
          type: 'Indo-Pakistani',
          image: 'images/Aga.jpg',
          rating: 4.8,
          link: 'https://www.agasrestaurant.com/',
        },
        {
          name: 'Alma Fajitas Rijas',
          type: 'Mexican',
          image: 'images/Alma.jpg',
          rating: 4.8,
          link: 'https://www.almalatinaonline.com/',
        },
        {
          name: 'Dak & Bop 18th Street',
          type: 'Korean',
          image: 'images/dak.jpg',
          rating: 4.8,
          link: 'https://www.dakandbop.com/',
        },
        {
          name: 'Seoul Garden',
          type: 'Korean',
          image: 'images/Seul.jpg',
          rating: 4.8,
          link: 'https://seoulgardenhoustontx.com/',
        },
        {
          name: 'Korean Noodle House',
          type: 'Korean',
          image: 'images/Korean.jpg',
          rating: 4.8,
          link: 'https://koreannoodlehouse.wixsite.com/home',
        },
      ];
  return (
    <div>
        <FoodTruckFavorites props={foodTrucks}/>
      
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));