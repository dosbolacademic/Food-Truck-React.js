import React from 'react';
import './foodTruckFavorites.css';

const FoodTruckFavorites = ({props}) => {

  return (
    <div className="container" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1551225458-6f6e53d36a3c')`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
      <h1 style={{ color: 'white', textAlign: 'center', fontSize: '3em', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
        Food Truck Favorites in Houston City
      </h1>
      <div className="foodTrucks" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8cm', marginTop: '100px', height: '400px' }}>
        {props.map((props, index) => (
          <div key={index} className="foodTruck rounded" style={{ backgroundColor: 'white', height: '100%', flex: '1' }}>
            <img src={props.image} alt={props.name} width="100%" height="100%" style={{ objectFit: 'cover' }} />
            <button>
              <a href={props.image}>
                <h3>{props.name}</h3>
              </a>
            </button>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
              {props.type === "Halal" ? <h2 style={{ textAlign: 'center' }}>Halal 5</h2> : <h2 style={{ textAlign: 'center' }}>{props.type}</h2>}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
              <span style={{ marginRight: '5px' }}>{props.rating}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 0l2.112 5.76 5.64.576-4.32 3.72 1.488 5.496L8 12.96l-4.92 2.592L4.56 8.328 0 7.752l5.64-.576L8 0z"
                />
              </svg>
            </div>
            <button  style={{ backgroundColor: 'red', width: '100%', padding: '10px', border: 'none', borderRadius: '5px', color: 'white', fontWeight: 'bold', fontSize: '1.2em', cursor: 'pointer' }}>
              <a href={props.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                View Menu
              </a>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodTruckFavorites;
