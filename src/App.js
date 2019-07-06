import React, { Component } from 'react';
import SideBar from './SideBar.js';
import allPlaces from "./places.json";
import './App.css';

class App extends Component {

  state = {    
    places: []
  };

//This code is invoked immediately after a component is mounted (inserted into the tree)
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