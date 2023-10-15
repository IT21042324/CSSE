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
  widthVariants,
} from "../contants/globalConstants";

export const styles = StyleSheet.create({
  seatContainer: {
    width: width.seatWidth,
    height: height.seatHeight,
    borderRadius: borderRadius.busSeat,
    margin: margin.xSmall,
  },
  seatNoContainer: {
    justifyContent: position.center,
    alignItems: position.center,
    flex: flexValues.full,
  },
  seatNoText: {
    color: colorVariants.white,
    fontFamily: fontFamily.titleText,
    fontSize: fontSize.large,
  },
  seatInfoContainer: {
    minWidth: widthVariants.full,
  },
  seatInfoRecord: {
    padding: padding.xxxSmall,
    paddingTop: padding.small,
    paddingBotttom: padding.small,
    flexDirection: flexDirections.row,
    justifyContent: position.spaceBetween,
  },
  seatInfoRecordKey: {
    fontFamily: fontFamily.subTitleText,
    fontSize: fontSize.medium,
    color: colorVariants.black,
  },
  seatInfoRecordValue: {
    fontFamily: fontFamily.subTitleText,
    fontSize: fontSize.medium,
    color: colorVariants.gray,
  },
});
