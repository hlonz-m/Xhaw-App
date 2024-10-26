import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function ContactScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.contactInfo}>Contact Info:</Text>
        <Text style={styles.contactDetail}>Phone - 0112345678</Text>
        <Text style={styles.contactDetail}>Email - info@empower.com</Text>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -26.2041,
            longitude: 28.0473,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}
        >
          <Marker
            coordinate={{ latitude: -26.2041, longitude: 28.0473 }}
            title="Empowering the Nation - Location 1"
            description="Johannesburg Central"
          />
          <Marker
            coordinate={{ latitude: -26.2023, longitude: 28.0459 }}
            title="Empowering the Nation - Location 2"
            description="Braamfontein"
          />
          <Marker
            coordinate={{ latitude: -26.1906, longitude: 28.0317 }}
            title="Empowering the Nation - Location 3"
            description="Parktown"
          />
        </MapView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  box: {
    backgroundColor: '#FFB6C1',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  contactInfo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000000',
  },
  contactDetail: {
    fontSize: 18,
    marginVertical: 4,
    color: '#000000',
  },
  map: {
    height: 200,
    marginTop: 10,
    borderRadius: 12,
  },
});


