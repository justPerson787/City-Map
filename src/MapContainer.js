import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


const map_Key = "AIzaSyAD282YtNT5yIr79A9vtGC-qBC2c0WXUdk";

export class MapContainer extends React.Component {

  state = {
        selectedPlace: {name: 'Cincinnati'},
        zoom: 14,
        center: {
            lat: 39.1031,
            lng: -84.5120
        }
        //selectedPlace: {name: 'Cincinnati'}
    }

  render() {

    /*const center = {
        lat: 39.1031,
        lng: -84.5120
      }*/
    return (
        <Map 
            aria-label="map"
            role="application"
            google={this.props.google}
            initialCenter={this.state.center}
            zoom={this.state.zoom}>
  
          {/*<Marker onClick={this.onMarkerClick}
                  name={'Current location'} />*/}
  
          {/*<InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
    </InfoWindow>*/}
        </Map>
    );
  }
}
  
  
export default GoogleApiWrapper({
    apiKey: map_Key
})(MapContainer)
    