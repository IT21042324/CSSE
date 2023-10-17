import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { MakeApiCall } from "../api/apiCalls";
import { UseLocationSettingsContext } from "../useHooks/locationSettings";
import Toast from "react-native-toast-message";

export const Settings = ({ navigation }) => {
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");

  const { getCoordinates } = MakeApiCall();
  const { setLocationCoordinates } = UseLocationSettingsContext();

  const handleSubmit = async () => {
    try {
      const { sourceCoordinates, destinationCoordinates } =
        await getCoordinates(startLocation, endLocation);

      setLocationCoordinates({
        startingLocation: sourceCoordinates,
        endingLocation: destinationCoordinates,
      });

      console.log(sourceCoordinates, destinationCoordinates);

      navigation.navigate("Inspection");
      Toast.show({
        type: "success",
        text1: "Location Set",
        text2: 'Proceed to "View travel Route" option to check route',
      });
    } catch (err) {
      Toast.show({
        type: "error",
        text1: "Invalid information",
        text2: "Please verify the start and end locations",
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Starting Location</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setStartLocation(text)}
        value={startLocation}
      />

      <Text style={styles.label}>Ending Location</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setEndLocation(text)}
        value={endLocation}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 20,
  },
});
