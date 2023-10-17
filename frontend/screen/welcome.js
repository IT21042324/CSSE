import React, { useState } from "react";
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Toast from "react-native-toast-message";
import { MakeApiCall } from "../api/apiCalls";
import { UseUserContext } from "../useHooks/user";
import { welcomeText } from "../contants/strings";
import { styles } from "../styles/welcome";

export default function Welcome({ navigation }) {
  const [userName, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("inspector");
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
        showSuccessToast(welcomeText.loginSuccessToast);
      }
    } else {
      showErrorToast(welcomeText.loginErrorToast);
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
        showSuccessToast(welcomeText.signUpSuccessToast);
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
      <Text style={styles.title}>
        {isSignup ? welcomeText.signUp : welcomeText.login}
      </Text>
      {isSignup && (
        <TextInput
          style={styles.input}
          placeholder={welcomeText.namePlaceholder}
          value={name}
          onChangeText={setName}
        />
      )}
      <TextInput
        style={styles.input}
        placeholder={welcomeText.userNamePlaceholder}
        value={userName}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder={welcomeText.passwordPlaceholder}
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={isSignup ? handleSignup : handleLogin}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.buttonText}>
            {isSignup ? welcomeText.signUp : welcomeText.login}
          </Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity style={styles.toggleButton} onPress={toggleSignup}>
        <Text style={styles.toggleButtonText}>
          {isSignup
            ? welcomeText.alreadyHaveAnAccountText
            : welcomeText.dontHaveAnAccountText}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
