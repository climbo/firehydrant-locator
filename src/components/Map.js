import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import api from '../utils/api';

class Container extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activeMarker: {},
      selectedPlace: {},
      showingInfoWindow: false
    };
  
  }

  onMarkerClick = (props, marker) =>
  this.setState({
    activeMarker: marker,
    selectedPlace: props,
    showingInfoWindow: true
  });

  render() 
  {
    if (!this.props.loaded) return <div>Loading...</div>;
  
    var hydrants = api.getFireHydrantLocations();
    console.log(this.props);        
    return (
      <Map
        centerAroundCurrentLocation
        className="map"
        google={this.props.google}
        style={{ height: '100%', position: 'relative', width: '100%' }}
        zoom={17}>
        
        <Marker key="100" name={"You are here"} position={this.props.mapCenter}/>
        {
          hydrants.hydrants.map(marker => (
          <Marker key={marker.id} 
            name={'Current Loc - ' + marker.latitude + ',' + marker.longitude}
            position={{lat: marker.latitude, lng: marker.longitude}} 
            onClick={this.onMarkerClick}  />
        ))}

        <InfoWindow
          marker={this.state.activeMarker}
          onClose={this.onInfoWindowClose}
          visible={this.state.showingInfoWindow}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>

        <InfoWindow  visible>
          <small>
            Click on any of the markers to display an additional info.
          </small>
        </InfoWindow>
  
      </Map>
    );
  }
  
};

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDVf-qlQOjgQiMSd-lCKCc2UNPQ63NSSRg')
})(Container)