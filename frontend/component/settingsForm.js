import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export const SettingsForm = () => {
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");

  const handleStartingChange = (text) => {
    setStartLocation(text);
  };

  const handleEndingChange = (text) => {
    setEndLocation(text);
  };

  const handleSubmit = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Starting Location</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleStartingChange}
        value={startLocation}
      />

      <Text style={styles.label}>Ending Location</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleEndingChange}
        value={endLocation}
        secureTextEntry={true}
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
