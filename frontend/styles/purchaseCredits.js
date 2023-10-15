import { StyleSheet } from "react-native";
import {
  borderWidth,
  colorVariants,
  flexDirections,
  flexValues,
  fontFamily,
  fontSize,
  fontWeight,
  margin,
  padding,
  position,
} from "../contants/globalConstants";

export const styles = StyleSheet.create({
  distanceContainer: {
    flex: flexValues.full,
    flexGrow: flexValues.full,
  },
  inputFieldContainer: {
    padding: padding.small,
    backgroundColor: colorVariants.white,
  },
  inputFieldRecord: {},
  inputFieldRecordKey: {
    paddingTop: padding.xxSmall,
  },
  inputFieldRecordValue: {
    paddingBottom: padding.xxSmall,
  },
  inputFieldRecordKeyText: {
    fontFamily: fontFamily.subTitleText,
    fontSize: fontSize.medium,
  },
  inputFieldRecordTextInput: {
    fontFamily: fontFamily.subTitleText,
    fontSize: fontSize.large,
    borderWidth: borderWidth.formField,
    padding: padding.xxxSmall,
  },
  disabledTextField: {
    fontFamily: fontFamily.subTitleText,
    fontSize: fontSize.large,
    borderWidth: borderWidth.formField,
    padding: padding.xxxSmall,
    backgroundColor: colorVariants.lightGray,
    borderColor: colorVariants.lightGray,
  },
  btnContainer: {
    flexDirection: flexDirections.row,
    justifyContent: position.center,
    padding: padding.small,
    backgroundColor: colorVariants.babyBlue,
    marginTop: margin.xxSmall,
  },
  btnContainerText: {
    fontFamily: fontFamily.subTitleText,
    fontSize: fontSize.medium,
    color: colorVariants.white,
    fontWeight: fontWeight.bold,
  },
  activityIndication: {
    flexDirection: flexDirections.row,
    justifyContent: position.center,
    padding: padding.small,
  },
});
