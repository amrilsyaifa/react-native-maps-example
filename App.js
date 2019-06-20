/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


export default class App extends Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          >
            <MapView.Marker
              coordinate={{
                latitude: 37.78825,
                longitude: -122.4324,
              }}
              title="Lokasi"
              description="Hello" />
          </MapView>
        </View>
        <View>
          <GooglePlacesAutocomplete
            placeholder='Enter Location'
            minLength={2}
            autoFocus={false}
            fetchDetails
            listViewDisplayed='auto'
            query={{
              key: 'AIzaSyCUVwuXUNjzldkfVLblLw37EVA5xjspvjI',
              language: 'en',
              types: 'geocode',
            }}
            currentLocation={false} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});