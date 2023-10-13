import React, { useEffect, useState } from "react";
import MapView, { Marker, Polyline } from "react-native-maps";
import { StyleSheet, View } from "react-native";
import * as Location from "expo-location";

// Factory function to create Marker
const createMarker = (coordinate, title) => (
  <Marker coordinate={coordinate} title={title} />
);

export default function Maps() {
  const [location, setLocation] = useState(null);

  // Destination coordinates
  const destination = {
    latitude: 6.916335790893801,
    longitude: 79.9723997994159,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Permission to access location was denied");
        return;
      }

      Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 1000,
          distanceInterval: 1,
        },
        (newLocation) => {
          const { coords } = newLocation;
          setLocation(coords);
        }
      );
    })();
  }, []);

  const region = location
    ? {
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    : null;

  return (
    <View style={styles.container}>
      {region && (
        <MapView style={styles.map} region={region}>
          {createMarker(region, "Current Position")}
          {createMarker(destination, "Destination")}
        </MapView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
