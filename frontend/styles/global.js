import { StyleSheet, StatusBar } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  titleText: {
    fontFamily: "ubuntu-bold",
    fontSize: 20,
    color: "#333",
  },
  errorText: {
    color: "crimson",
    fontWeight: "bold",
    marginTop: 2,
  },
});
