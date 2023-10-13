import { StyleSheet } from "react-native";
import {
  colorVariants,
  flexDirections,
  flexValues,
  fontFamily,
  fontSize,
  margin,
  padding,
  position,
  width,
} from "../contants/globalConstants";

export const styles = StyleSheet.create({
  backContainer: {
    marginBottom: margin.xSmall,
  },
  backIconText: {
    fontFamily: fontFamily.backButtonText,
    fontSize: fontSize.medium,
  },
  infoContainer: {
    padding: padding.small,
    backgroundColor: colorVariants.white,
  },
  infoFieldRecord: {
    flexDirection: flexDirections.row,
    justifyContent: position.spaceBetween,
    paddingTop: padding.xSmall,
    paddingBottom: padding.xSmall,
  },
  infoFieldRecordKey: {},
  inputFieldRecordValue: {},
  infoFieldRecordKeyText: {
    fontFamily: fontFamily.subTitleText,
    fontSize: fontSize.medium,
  },
  buyCreditsContainer: {
    marginTop: margin.medium,
    padding: padding.xSmall,
    backgroundColor: colorVariants.crimson,
  },
  buyCreditsContainerText: {
    fontFamily: fontFamily.subTitleText,
    fontSize: fontSize.large,
    alignSelf: position.center,
    color: colorVariants.whiteSmoke,
  },
});
