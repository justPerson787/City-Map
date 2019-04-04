import React, { Component } from 'react';
import './App.css';
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
                        
        <div >
          <SideBar places={this.state.places} />
        </div>
      </main>     

    );
  }
}

export default App;


