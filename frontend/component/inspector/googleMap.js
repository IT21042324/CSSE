import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { styles } from "../../styles/googleMap";
import { UseLocationSettingsContext } from "../../useHooks/locationSettings";
import Toast from "react-native-toast-message";

// Factory function to create Marker
const createMarker = (coordinate, title) => (
  <Marker coordinate={coordinate} title={title} />
);

export default function Maps({ navigation }) {
  const { locations } = UseLocationSettingsContext();

  const [destinationLatitude, setDestinationLatitude] =
    useState(6.916335790893801);
  const [destinationLongitude, setDestinationLongitude] =
    useState(79.9723997994159);

  useEffect(() => {
    if (
      locations.endingLocation?.latitude &&
      locations.endingLocation?.longitude
    ) {
      console.log(locations.endingLocation);
      setDestinationLatitude(parseFloat(locations.endingLocation.latitude));
      setDestinationLongitude(parseFloat(locations.endingLocation.longitude));
    } else {
      navigation.navigate("Inspection");
      Toast.show({
        type: "error",
        text1: "End location not set",
        text2: "Please set it from the App Settings",
      });
    }
  }, []);

  const [location, setLocation] = useState(null);

  // Destination coordinates
  const destination = {
    latitude: destinationLatitude,
    longitude: destinationLongitude,
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
