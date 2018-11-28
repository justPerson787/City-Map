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
    componentDidMount() {
        this.setState({selectedPlaces: allPlaces})
       // this.getImages();
        
    }  

    
    render() {       
                            
        
        return (
            <div id="maincontent">
                
              <div className="sidebar">
                <h2 className="sidebar-title">Points of Interest</h2>
                <p class='sources'>Images are provided by Flickr.com API</p>
                <p class='sources'>Map is provided by Google map</p>
                <input aria-label='Search Filter' className="filter" type='text'
                    placeholder="Search by location"
                    
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
                <div id="map"><MapContainer places={this.state.selectedPlaces}/></div>
            </div>
                  
        )
    }
}
export default SideBar

