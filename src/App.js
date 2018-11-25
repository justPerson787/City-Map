import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import MapContainer from './MapContainer.js';
import ListView from './ListView.js'
import places from "./places.json";

class App extends Component {

  state = {
    places2: []
  };

  

  /*componentDidMount() {
      this.setState({ places: this.state.places });
  }*/
  

  render() {
    
    return (
      <main>
                        
        <div id="maincontent">
          <ListView places={places}/>
          <MapContainer places={places}/>
        </div>
      </main>
      

    );
  }
}


export default App;

//AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo
