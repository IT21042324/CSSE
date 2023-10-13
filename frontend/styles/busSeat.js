import { StyleSheet } from "react-native";
import {
  borderRadius,
  colorVariants,
  flexDirections,
  fontFamily,
  fontSize,
  height,
  margin,
  padding,
  position,
  width,
} from "../contants/globalConstants";

export const styles = StyleSheet.create({
  seatContainer: {
    backgroundColor: colorVariants.babyBlue,
    width: width.seatWidth,
    height: height.seatHeight,
    borderRadius: borderRadius.busSeat,
    margin: margin.xSmall,
  },
  seatNoContainer: { justifyContent: "center", alignItems: "center", flex: 1 },
  seatNoText: {
    color: colorVariants.white,
    fontFamily: fontFamily.titleText,
    fontSize: fontSize.large,
  },
  seatInfoContainer: {
    minWidth: "100%",
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
