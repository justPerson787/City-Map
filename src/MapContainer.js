import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


//Remainder: replce w  other key
const mapKey = "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo";

export class MapContainer extends React.Component {

  state = {
        selectedPlace: {name: 'Cincinnati'}
    }

  render() {
    return (
        <Map google={this.props.google} zoom={14}>
  
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
  
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
    apiKey: mapKey
})(MapContainer)
    