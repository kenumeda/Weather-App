import * as React from 'react';
import './style.css';


export default function App() {

const APIKEY = '198d9772decf7c86b3b3544c6a8df59d'



  return (
    <div className="body">
      <div className="container">
        <div className="search-box">
          <input type="text" placeholder="Enter Your Location" />
          <button onClick={
          }>Search</button>
        </div>
      </div>

      <div className="weather-box">
        <img></img>
      </div>
    </div>
  );
}
