import { StyleSheet, StatusBar } from "react-native";
import { fontSize, fontStyle } from "../contants/globalConstants";

export const globalStyles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  titleText: {
    fontFamily: fontStyle.titleText,
    fontSize: 20,
    color: "#333",
  },
  subTitleText: {
    fontFamily: fontStyle.subTitleText,
    fontSize: fontSize.medium,
    color: "black",
  },
  errorText: {
    color: "crimson",
    fontWeight: "bold",
    marginTop: 2,
  },
});
