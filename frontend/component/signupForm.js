import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function SignupForm() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("normalUser");

  const handleSignup = () => {
    // Handle signup logic here
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Text style={styles.label}>User Type:</Text>
      <View style={styles.radioGroup}>
        <TouchableOpacity
          style={[
            styles.radioButton,
            userType === "normalUser" && styles.radioButtonSelected,
          ]}
          onPress={() => setUserType("normalUser")}
        >
          <Text style={styles.radioLabel}>Normal User</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.radioButton,
            userType === "inspector" && styles.radioButtonSelected,
          ]}
          onPress={() => setUserType("inspector")}
        >
          <Text style={styles.radioLabel}>Inspector</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.radioButton,
            userType === "manager" && styles.radioButtonSelected,
          ]}
          onPress={() => setUserType("manager")}
        >
          <Text style={styles.radioLabel}>Manager</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    marginVertical: 8,
    width: "100%",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 8,
    alignSelf: "flex-start",
    marginLeft: "10%",
  },
  radioGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 16,
  },
  radioButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    width: "30%",
    alignItems: "center",
  },
  radioButtonSelected: {
    backgroundColor: "#ccc",
  },
  radioLabel: {
    fontSize: 14,
  },
  button: {
    backgroundColor: "#007AFF",
    borderRadius: 4,
    padding: 12,
    width: "80%",
    alignItems: "center",
    marginTop: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
