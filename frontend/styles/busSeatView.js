import { StyleSheet } from "react-native";
import {
  flexDirections,
  flexValues,
  padding,
  position,
} from "../contants/globalConstants";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: flexValues.full,
    alignItems: position.center,
    padding: padding.small,
  },
  backSeatRow: {
    flexDirection: flexDirections.row,
  },
});
