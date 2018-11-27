import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { createConnection } from 'net';

const map_Key = "AIzaSyAD282YtNT5yIr79A9vtGC-qBC2c0WXUdk";

export class MapContainer extends React.Component {
    
    state = {
        zoom: 12,
        center: {
            lat: 39.1031,
            lng: -84.5120
        },
        showingInfoWindow: false,
        activeMarker: {markerName:'none'},
        selectedMarker: [], 
        animation: null,        
    }

    // Animation effect with marker on click
    onMarkerClick = (props, marker, e) =>
        
        this.setState({
            selectedMarker: props,
            activeMarker: marker,
            showingInfoWindow: true,
                
        });
        
    onAnimation = (marker) =>
        marker.setAnimation(window.google.maps.Animation.BOUNCE);
        /*setTimeout(function() {
          marker.setAnimation(null);
        }, 2100); */  
        
        /*marker.setAnimation(window.google.maps.Animation.BOUNCE);
        setTimeout(function() {
          marker.setAnimation(null);
        }, 2100);*/

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: {markerName:'none'}
            
            })
        }
    };

    render() {    
   
        return (
            <div>
                <Map 
                    aria-label="map"
                    role="application"
                    google={this.props.google}
                    initialCenter={this.state.center}
                    zoom={this.state.zoom}
                    onClick = {this.onMapClicked}
                >                
                    
                    {this.props.places.map((marker) => 
                        <Marker 
                            key={marker.id}
                            markerName={marker.name}
                            position={{ lat: marker.latitude, lng: marker.longitude }}
                            onClick={this.onMarkerClick}
                            animation={this.state.activeMarker.markerName === marker.name &&this.props.google.maps.Animation.BOUNCE}
                                                       

                        />
                    )}

                    <InfoWindow 
                        visible = {this.state.showingInfoWindow}
                        marker = {this.state.activeMarker}     >                            
                        <div>
                            <p>Hello</p>
                        </div>
                    </InfoWindow>
                    
                </Map>
            </div>
        );
    }
}
  
export default GoogleApiWrapper({
    apiKey: map_Key
})(MapContainer)
    

/*location.marker.addListener('click', function() {
        const marker = this;

        // bounce marker three times then stop
        marker.setAnimation(window.google.maps.Animation.BOUNCE);
        setTimeout(function() {
          marker.setAnimation(null);
        }, 2100);*/