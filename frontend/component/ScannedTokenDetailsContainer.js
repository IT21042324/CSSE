import { Image, StyleSheet, Text, View } from "react-native";
import { passengerImage } from "../assets/imageIndex";
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
  resizeMode,
  width,
} from "../contants/globalConstants";
import {
  getDateFromCheckInDate,
  getTimeFronCheckinDate,
} from "../miscellaneous/helper";

export const ScannedTokenDetailsContainer = ({ dataFromQR }) => {
  return (
    <View style={styles.userInfoContainer}>
      <View style={styles.imageAndNameContainer}>
        <Image
          source={passengerImage}
          resizeMode={resizeMode.stretch}
          style={styles.passengerIcon}
        />
        <View style={styles.nameAndCreditsContainer}>
          <View style={styles.singleInfo}>
            <Text style={styles.nameInfoText}>
              {dataFromQR?.name || "Simon Stats"}
            </Text>
          </View>
          <View style={styles.singleInfo}>
            <Text style={styles.creditInfoText}>
              Credits: {dataFromQR.availableCredits}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.travelInfoContainer}>
        <View style={styles.travelInfoRow}>
          <Text style={styles.travelInfoRowKey}>Boarding Point</Text>
          <Text style={styles.travelInfoRowValue}>
            {dataFromQR.startingPoint}
          </Text>
        </View>
        <View style={styles.travelInfoRow}>
          <Text style={styles.travelInfoRowKey}>Checkin Time</Text>
          <Text style={styles.travelInfoRowValue}>
            {getTimeFronCheckinDate(dataFromQR.checkInDate)}
          </Text>
        </View>
        <View style={styles.travelInfoRow}>
          <Text style={styles.travelInfoRowKey}>Checkin Date</Text>
          <Text style={styles.travelInfoRowValue}>
            {getDateFromCheckInDate(dataFromQR.checkInDate)}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
