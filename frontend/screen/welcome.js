import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import { UseUserContext } from "../useHooks/user";
import { MakeApiCall } from "../api/apiCalls";
import Toast from "react-native-toast-message";

export default function Welcome({ navigation }) {
  const [userName, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("normalUser");
  const [isSignup, setIsSignup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { setUser } = UseUserContext();
  const { signup, login } = MakeApiCall();

  const handleLogin = async () => {
    setIsLoading(true);

    const userInfo = await login({ userName, password });

    setIsLoading(false);

    if (userInfo._id) {
      setUser(userInfo);

      if (userInfo.userType === "inspector") {
        navigation.navigate("Inspection");
        showSuccessToast("Login Successful");
      } else if (userInfo.userType === "normalUser") {
        navigation.navigate("Home");
        showSuccessToast("Login Successful");
      }
    } else {
      showErrorToast("Invalid username or password");
    }
  };

  const handleSignup = async () => {
    setIsLoading(true);

    const userInfo = await signup({
      userName,
      password,
      name,
      userType,
    });

    setIsLoading(false);

    if (userInfo._id) {
      setUser(userInfo);

      if (userType === "inspector") {
        navigation.navigate("Inspection");
        showSuccessToast("Sign Up Successful");
      } else if (userType === "normalUser") {
        navigation.navigate("Home");
        showSuccessToast("Sign Up Successful");
      }
    } else {
      showErrorToast(userInfo.err);
    }
  };

  const toggleSignup = () => {
    setIsSignup(!isSignup);
  };

  const showSuccessToast = (text) => {
    Toast.show({
      type: "success",
      position: "bottom",
      text1: text,
      visibilityTime: 2000,
      autoHide: true,
      topOffset: 30,
      bottomOffset: 40,
    });
  };

  const showErrorToast = (text) => {
    Toast.show({
      type: "error",
      position: "bottom",
      text1: text,
      visibilityTime: 2000,
      autoHide: true,
      topOffset: 30,
      bottomOffset: 40,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isSignup ? "Sign Up" : "Log In"}</Text>
      {isSignup && (
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
      )}
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={userName}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      {isSignup && (
        <>
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
          </View>
        </>
      )}
      <TouchableOpacity
        style={styles.button}
        onPress={isSignup ? handleSignup : handleLogin}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.buttonText}>
            {isSignup ? "Sign Up" : "Log In"}
          </Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity style={styles.toggleButton} onPress={toggleSignup}>
        <Text style={styles.toggleButtonText}>
          {isSignup
            ? "Already have an account? Log In"
            : "Don't have an account? Sign Up"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    marginVertical: 8,
    width: "80%",
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
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 16,
    padding: 10,
  },
  radioButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    alignItems: "center",
    width: "40%",
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
  toggleButton: {
    marginTop: 16,
  },
  toggleButtonText: {
    color: "#007AFF",
    fontSize: 14,
  },
});
