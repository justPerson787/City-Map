import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import MapContainer from './MapContainer.js';
import SideBar from './SideBar.js'
import allPlaces from "./places.json";
import ImagesAP from './ImagesAP.js';

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
                        
        <div >
          <SideBar places={this.state.places} />
        </div>
        {/*<div><ImagesAP/></div>*/}
      </main>
      

    );
  }
}

export default App;

//AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo
