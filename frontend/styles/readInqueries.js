import { StyleSheet } from "react-native";
import {
  colorVariants,
  flexDirections,
  flexValues,
  fontWeight,
  margin,
  padding,
  position,
} from "../contants/globalConstants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: padding.small,
    backgroundColor: "#f5f5f5",
  },
  filterContainer: {
    flexDirection: flexDirections.row,
    alignItems: position.center,
    marginBottom: margin.xxSmallInBetween,
  },
  filterLabel: {
    marginRight: margin.xxSmallInBetween,
  },
  picker: {
    flex: flexValues.full,
  },
  header: {
    flexDirection: flexDirections.row,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: margin.xxSmallInBetween,
    backgroundColor: colorVariants.white,
  },
  headerText: {
    flex: 1,
    fontWeight: fontWeight.bold,
    textAlign: position.center,
    paddingVertical: padding.xxSmallInBetween,
  },
  inquiryType: {
    textAlign: position.left,
    flex: 2,
  },
  description: {
    textAlign: position.left,
    flex: 3,
  },
  userName: {
    textAlign: position.left,
    flex: 2,
  },
  penaltyAmount: {
    textAlign: position.right,
    flex: 2,
    color: "#f00",
    fontWeight: fontWeight.bold,
  },
  createdAt: {
    textAlign: position.right,
    flex: 2,
  },
  row: {
    flexDirection: flexDirections.row,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: padding.xxSmallInBetween,
    backgroundColor: colorVariants.white,
  },
  cell: {
    flex: flexValues.full,
    textAlign: position.center,
    paddingVertical: padding.xxSmallInBetween,
  },
  contentContainer: {
    flexGrow: flexValues.full,
  },
});
