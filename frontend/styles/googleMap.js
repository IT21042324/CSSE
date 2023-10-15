import { StyleSheet } from "react-native";
import { flexValues, widthVariants } from "../contants/globalConstants";

export const styles = StyleSheet.create({
  container: {
    flex: flexValues.full,
  },
  map: {
    width: widthVariants.full,
    height: widthVariants.full,
  },
});
