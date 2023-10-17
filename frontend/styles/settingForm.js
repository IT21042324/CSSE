import { StyleSheet } from "react-native";
import {
  borderRadius,
  borderWidth,
  colorVariants,
  flexValues,
  fontWeight,
  height,
  margin,
  padding,
} from "../contants/globalConstants";

export const styles = StyleSheet.create({
  container: {
    flex: flexValues.full,
    padding: padding.smallMedium,
    backgroundColor: "#f5f5f5",
  },
  label: {
    fontWeight: fontWeight.bold,
    marginBottom: margin.xxxSmall,
  },
  input: {
    height: height.settingFormHeigh,
    borderColor: colorVariants.gray,
    borderWidth: borderWidth.formField,
    borderRadius: borderRadius.textInput,
    backgroundColor: colorVariants.white,
    padding: padding.xxSmall,
    marginBottom: margin.medium,
  },
});
