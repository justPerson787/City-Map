import React, { Component } from 'react';
//import picture from "./FlickrAPI.js";
import allPlaces from "./places.json";
import MapContainer from './MapContainer.js';

class SideBar extends Component {

    state = {
        query: '',
        selectedPlaces: [],
        pictures: []            
    }
    
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
    
    // Set active marker when clicking list item
  setActiveMarker = (marker) => {
    document.querySelector(`[markerName="${marker}"]`).click();
  }

    componentDidMount() {
        this.setState({selectedPlaces: allPlaces})
       // this.getImages();        
    }  
    
    render() {                                 
        
        return (
            <div id="maincontent">                
              <div className="sidebar">
                <h2 className="sidebar-title" tabIndex='0'>Points of Interest</h2>
                <p className='sources'>Images are provided by Flickr.com API</p>
                <p className='sources'>Map is provided by Google Maps API</p>
                <input aria-label='Search Filter' className="filter" type='text'
                    placeholder="Search by name" tabIndex='0'                    
                    onChange = {(event) => this.updateQuery(event.target.value)}   
                ></input>
                    <ul className="cc">
                        {this.state.selectedPlaces.map((place, id) => 
                        <li
                            className="location"
                            key={place.id}
                            role='button'
                            tabIndex='0'
                            aria-label='place location'>
                            
                            {place.name}
                        </li>
                        )}                      
                    </ul>
                    
              </div>                                          
                <div id="map"><MapContainer places={this.state.selectedPlaces} setActiveMarker={this.setActiveMarker}/></div>
            </div>                  
        )
    }
}
export default SideBar

