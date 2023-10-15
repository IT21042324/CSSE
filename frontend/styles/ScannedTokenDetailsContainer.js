import { StyleSheet } from "react-native";
import {
  borderRadius,
  colorVariants,
  flexDirections,
  flexValues,
  fontFamily,
  fontSize,
  height,
  margin,
  padding,
  position,
  width,
} from "../contants/globalConstants";

export const styles = StyleSheet.create({
  userInfoContainer: {
    flex: flexValues.full,
    backgroundColor: colorVariants.whiteSmoke,
  },
  passengerIcon: {
    height: height.full,
    width: width.passengerIcon,
    borderRadius: borderRadius.passengerIcon,
  },
  imageAndNameContainer: {
    width: width.full,
    height: height.imageAndNameContainer,
    flexDirection: flexDirections.row,
    paddingLeft: padding.xxSmall,
    paddingRight: padding.xxSmall,
    paddingTop: padding.xxxSmall,
  },
  nameAndCreditsContainer: {
    flexDirection: flexDirections.column,
    marginLeft: margin.small,
    justifyContent: position.center,
  },
  singleInfo: {},
  nameInfoText: {
    fontFamily: fontFamily.subTitleText,
    fontSize: fontSize.large,
    color: colorVariants.black,
  },
  creditInfoText: {
    fontFamily: fontFamily.subTitleText,
    fontSize: fontSize.medium,
    color: colorVariants.gray,
  },
  travelInfoContainer: {
    flex: flexValues.full,
    justifyContent: position.center,
  },
  travelInfoRow: {
    flexDirection: flexDirections.row,
    justifyContent: position.spaceBetween,
    padding: padding.xSmall,
  },
  travelInfoRowKey: {
    fontFamily: fontFamily.subTitleText,
    fontSize: fontSize.medium,
  },
  travelInfoRowValue: {
    fontFamily: fontFamily.subTitleText,
    fontSize: fontSize.medium,
    color: colorVariants.gray,
  },
});
