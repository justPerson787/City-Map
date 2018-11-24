import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import MapContainer from './MapContainer.js'

class App extends Component {

  state = {
    lat: 29.7844913,
    lon: -95.7880231,
    zoom: 13,
    //selectedPlace: {name: 'Cincinnati'}
  }

  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  }


  render() {
    return (
      <main>
        <div id="map">
          <MapContainer/>
        </div>
      </main>
      

    );
  }
}


export default App;

//AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo
