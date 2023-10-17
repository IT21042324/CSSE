import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { MakeApiCall } from "../api/apiCalls";
import { UseLocationSettingsContext } from "../useHooks/locationSettings";
import Toast from "react-native-toast-message";
import { settingsText } from "../contants/strings";
import { styles } from "../styles/settingForm";

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
        text1: settingsText.locationSetToast,
        text2: settingsText.locationSetToastMessage,
      });
    } catch (err) {
      Toast.show({
        type: "error",
        text1: settingsText.invalidLocationToast,
        text2: settingsText.invalidLocationToastMessage,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{settingsText.startingLocation}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setStartLocation(text)}
        value={startLocation}
      />

      <Text style={styles.label}>{settingsText.endingLocation}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setEndLocation(text)}
        value={endLocation}
      />

      <Button title={settingsText.submit} onPress={handleSubmit} />
    </View>
  );
};
