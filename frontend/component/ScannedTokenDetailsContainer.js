import { Text, View, StyleSheet, Image } from "react-native";
import {
  height,
  margin,
  padding,
  colorVariants,
  borderRadius,
  position,
  flexDirections,
  fontFamily,
  width,
  resizeMode,
  fontSize,
} from "../contants/globalConstants";
import { passengerImage } from "../assets/imageIndex";

export const ScannedTokenDetailsContainer = () => {
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
            <Text style={styles.nameInfoText}>Simon Stats</Text>
          </View>
          <View style={styles.singleInfo}>
            <Text style={styles.creditInfoText}>Credits: 200</Text>
          </View>
        </View>
      </View>
      <View style={styles.travelInfoContainer}>
        <View style={styles.travelInfoRow}>
          <Text style={styles.travelInfoRowKey}>Boarding Point</Text>
          <Text style={styles.travelInfoRowValue}>Maharagama</Text>
        </View>
        <View style={styles.travelInfoRow}>
          <Text style={styles.travelInfoRowKey}>Alighting Point</Text>
          <Text style={styles.travelInfoRowValue}>Malabe</Text>
        </View>
        <View style={styles.travelInfoRow}>
          <Text style={styles.travelInfoRowKey}>Credits</Text>
          <Text style={styles.travelInfoRowValue}>200</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userInfoContainer: {
    flex: 1,
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
    flex: 1,
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
