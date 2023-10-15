import { StyleSheet } from "react-native";
import {
  flexDirections,
  fontSize,
  height,
  position,
  width,
} from "../contants/globalConstants";

export const styles = StyleSheet.create({
  header: {
    width: width.full,
    height: height.full,
    flexDirection: flexDirections.row,
    alignItems: position.center,
  },
  headerText: {
    fontSize: fontSize.large,
    letterSpacing: 1,
  },
  logoContainer: {
    position: position.absolute,
    right: position.none,
    height: height.full,
    alignItems: position.center,
    justifyContent: position.center,
    width: width.logoContainer,
  },
  logo: {
    height: height.logoHeight,
    width: width.full,
    right: position.none,
  },
});
