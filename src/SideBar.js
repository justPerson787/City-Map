import React, { Component } from 'react';
//import places from "./places.json";
import allPlaces from "./places.json";
import MapContainer from './MapContainer.js';

class SideBar extends Component {

    state = {
        query: '',
        selectedPlaces: [],
            
    }
    
    
    /*updatePlaces = ()  => {
        this.setState({selectedPlaces: this.props.places})
    }*/


    updateQuery = (query) => {
        this.setState({ query: query }, () => {
          this.searchPlace(this.state.query); 
        });
    }
    
// Function to filter locations based on user search input

    searchPlace = (query) => {        
    if (!query) {
        this.setState({ selectedPlaces: allPlaces})                  
    }
    else {
        const filteredPlaces = this.props.places.filter((place) => place.name.toLowerCase().includes(query.toLowerCase()));
        this.setState({ selectedPlaces: filteredPlaces });
    }

    }    
    componentDidMount() {
        this.setState({selectedPlaces: allPlaces})
      }  

    render() {       
         
                   
        console.log(this.state.selectedPlaces,'ppp', this.props.places)    
        return (
            <div id="maincontent">
                
              <div className="sidebar">
                <h2 className="sidebar-title">Points of Interest</h2>
                <input aria-label='Search Filter' className="filter" type='text'
                    placeholder="Search by location"
                    
                    onChange = {(event) => this.updateQuery(event.target.value)}   
                ></input>
                    <ul className="cc">
                        {this.state.selectedPlaces.map((place, id) => 
                        <li
                            className="location"
                            key={place.id}>
                            {place.name}
                        </li>
                        )}                      
                    </ul>
                    
              </div>                                          
                <div id="map"><MapContainer places={this.state.selectedPlaces}/></div>
            </div>
          
          
        )
    }
}
export default SideBar

