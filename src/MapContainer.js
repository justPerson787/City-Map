import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const map_Key = "AIzaSyAD282YtNT5yIr79A9vtGC-qBC2c0WXUdk";

export class MapContainer extends React.Component {
    
    state = {
        selectedPlace: {name: 'Cincinnati'},
        zoom: 12,
        center: {
            lat: 39.1031,
            lng: -84.5120
        }        
    }

    render() {
      
   
        return (
            <div>
                <Map 
                    aria-label="map"
                    role="application"
                    google={this.props.google}
                    initialCenter={this.state.center}
                    zoom={this.state.zoom}
                >                
                    
                    {this.props.places.map((marker) => 
                        <Marker 
                            key={marker.id}
                            name={marker.name}
                            position={{ lat: marker.latitude, lng: marker.longitude }}
                            onClick={this.onMarkerClick}
                        />
                    )}
  
          {/*<InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
    </InfoWindow>*/}
                </Map>
            </div>
        );
    }
}
  
export default GoogleApiWrapper({
    apiKey: map_Key
})(MapContainer)
    