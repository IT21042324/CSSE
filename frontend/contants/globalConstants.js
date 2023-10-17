import { AntDesign, Entypo, Feather } from "@expo/vector-icons";
import moment from "moment";

export const padding = {
  xxxSmall: 6,
  xxSmallInBetween: 8,
  xxSmall: 10,
  xSmall: 14,
  small: 18,
  smallMedium: 20,
  medium: 22,
  large: 26,
  extraLarge: 30,
  singleOptionPaddingTop: "5%",
};

export const margin = {
  xxxxSmall: 2,
  xxxSmall: 6,
  xxSmallInBetween: 8,
  xxSmall: 10,
  xSmall: 14,
  small: 18,
  medium: 22,
  large: 26,
  xLarge: 30,
  xxLarge: 36,
  xxxLarge: 50,
  formErrorText: 2,
  tenPercent: "10%",
};

export const height = {
  qrContainer: "50%",
  headerHeight: 60,
  half: "50%",
  full: "100%",
  imageAndNameContainer: 90,
  tokenStatusContainer: 80,
  logoHeight: "280%",
  seatHeight: 50,

  settingFormHeigh: 40,
};

export const width = {
  InspectionSingleOptionsWidth: 150,
  half: "50%",
  full: "100%",
  qrScannerBtn: 200,
  passengerIcon: 90,
  seatWidth: 50,
  distanceLocation: 160,
  logoContainer: 40,
};

export const borderRadius = {
  passengerIcon: 200,
  inquiryBtn: 200,
  textInput: 5,
  busSeat: 10,
};

export const fontFamily = {
  titleText: "ubuntu-bold",
  subTitleText: "ubuntu-regular",
  inspectorOptionsText: "ubuntu-regular",
  backButtonText: "arOneSans-regular",
};

export const fontStyle = {
  normal: "normal",
  italic: "italic",
};

export const fontWeight = {
  bold: "bold",
};

export const fontSize = {
  xSmall: 10,
  small: 12,
  mediumSmall: 14,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 30,
  xxxLarge: 50,
};

export const colorVariants = {
  black: "black",
  white: "#fff",
  dodgerblue: "dodgerblue",
  lightblue: "lightblue",
  green: "green",
  red: "red",
  yellow: "yellow",
  blue: "blue",
  babyBlue: "#89CFF0",
  crimson: "crimson",
  darkGray: "#333",
  gray: "gray",
  platinumGray: "#E5E4E2",
  whiteSmoke: "#f5f5f5",
  turquesa: "#468499",
  lightGray: "#E6E6E3",
  pistachio: "#93C572",
  available: "#93C572",
  helonica: "#DB3E79",
  occupied: "#DB3E79",
  lightCoral: "#f1807e",
  lightGray: "#ccc",
  deepSkyBlue: "#007AFF",
};

export const size = {
  small: "small",
  large: "large",
};

export const heightVariants = {
  full: "100%",
  none: "0%",
  half: "50%",
  quarter: "25%",
  threeQuarter: "75%",
};

export const position = {
  none: 0,
  center: "center",
  absolute: "absolute",
  spaceAround: "space-around",
  spaceBetween: "space-between",
  flexEnd: "flex-end",
  right: "right",
  left: "left",
  flexStart: "flex-start",
};

export const widthVariants = {
  full: "100%",
  half: "50%",
  quarter: "25%",
  threeQuarter: "75%",
  none: "0%",
  eightyPercent: "80%",
  fourtyPercent: "40%",
};

export const flexDirections = {
  row: "row",
  rowReverse: "row-reverse",
  column: "column",
  columnReverse: "column-reverse",
};

export const commonValues = {
  optionsBorderRadius: 15,
};

export const flexValues = {
  full: 1,
  quarter: 0.2,
  half: 0.5,
  threeQuarter: 0.7,
  none: 0,
  wrap: "wrap",
};

export const resizeMode = {
  cover: "cover",
  contain: "contain",
  stretch: "stretch",
  center: "center",
  repeat: "repeat",
};

export const scanTokenPage = {
  tokenValidationIconSuccess: (
    <Feather
      name="check-circle"
      size={40}
      style={{ color: colorVariants.green }}
    />
  ),
  tokenValidationIconFailure: (
    <Entypo
      name="circle-with-cross"
      size={40}
      style={{ color: colorVariants.red }}
    />
  ),
};

export const inquiryForm = {
  closeFormIcon: (
    <AntDesign name="close" size={24} color={colorVariants.crimson} />
  ),
};

export const borderWidth = {
  formField: 1,
  formOutset: 5,
};

export const currTime = moment().local().format("HH:mm A");
export const currDate = moment().local().format("Do MMM YY");
