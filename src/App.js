import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import MapContainer from './MapContainer.js';
import SideBar from './SideBar.js'
import allPlaces from "./places.json";

class App extends Component {

  state = {
    //selectedPlaces: [],
    places: []
  };

  componentDidMount() {
    this.setState({places: allPlaces})
  }
    
  render() {
         
    return (
      <main>
                        
        <div id="maincontent">
          <SideBar places={this.state.places}/>
          <MapContainer places={this.state.places}/>
        </div>
      </main>
      

    );
  }
}

export default App;

//AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo
