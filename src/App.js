import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import MapContainer from './MapContainer.js'

class App extends Component {

  /*state = {
    lat: 39.1031,
    lon: -84.5120,
    zoom: 8,
    //selectedPlace: {name: 'Cincinnati'}
  }*/

  /*initMap = () => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      //center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  }
*/

  render() {
    return (
      <main>
        <div id="map">
          
          <MapContainer></MapContainer>
        </div>
      </main>
      

    );
  }
}


export default App;

//AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo
