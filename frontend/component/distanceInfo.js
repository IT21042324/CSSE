import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { distanceInfo } from "../contants/strings";
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
import {
  calculateJourneyFare,
  calculateRequiredCredits,
} from "../miscellaneous/helper";

export const DistanceInfo = ({ information, backPressHandler }) => {
  return (
    <View style={styles.infoContainer}>
      <TouchableOpacity style={styles.backContainer} onPress={backPressHandler}>
        <Text style={styles.backIconText}>Back</Text>
      </TouchableOpacity>

      <View style={styles.infoFieldRecord}>
        <View style={styles.infoFieldRecordKey}>
          <Text style={styles.infoFieldRecordKeyText}>
            {distanceInfo.originAddress}
          </Text>
        </View>

        <View style={styles.inputFieldRecordValue}>
          <Text
            style={[
              styles.infoFieldRecordKeyText,
              {
                width: width.distanceLocation,
                flexWrap: flexValues.wrap,
                textAlign: position.right,
              },
            ]}
          >
            {information?.origin_addresses || " Not Found"}
          </Text>
        </View>
      </View>

      <View style={styles.infoFieldRecord}>
        <View style={styles.infoFieldRecordKey}>
          <Text style={styles.infoFieldRecordKeyText}>
            {distanceInfo.destinationAddress}
          </Text>
        </View>

        <View style={styles.inputFieldRecordValue}>
          <Text
            style={[
              styles.infoFieldRecordKeyText,
              {
                width: width.distanceLocation,
                flexWrap: flexValues.wrap,
                textAlign: position.right,
              },
            ]}
          >
            {information?.destination_addresses || " Not Found"}
          </Text>
        </View>
      </View>

      <View style={styles.infoFieldRecord}>
        <View style={styles.infoFieldRecordKey}>
          <Text style={styles.infoFieldRecordKeyText}>
            {distanceInfo.distance}
          </Text>
        </View>

        <View style={styles.inputFieldRecordValue}>
          <Text style={styles.infoFieldRecordKeyText}>
            {information?.distance || " Not Found"}
          </Text>
        </View>
      </View>

      <View style={styles.infoFieldRecord}>
        <View style={styles.infoFieldRecordKey}>
          <Text style={styles.infoFieldRecordKeyText}>
            {distanceInfo.duration}
          </Text>
        </View>

        <View style={styles.inputFieldRecordValue}>
          <Text style={styles.infoFieldRecordKeyText}>
            {information?.duration || " Not Found"}
          </Text>
        </View>
      </View>

      <View style={styles.infoFieldRecord}>
        <View style={styles.infoFieldRecordKey}>
          <Text style={styles.infoFieldRecordKeyText}>
            {distanceInfo.credits}
          </Text>
        </View>

        <View style={styles.inputFieldRecordValue}>
          <Text style={styles.infoFieldRecordKeyText}>
            {`Rs. ${calculateRequiredCredits(50, information.distance)}` ||
              " Not Found"}
          </Text>
        </View>
      </View>

      <View style={styles.infoFieldRecord}>
        <View style={styles.infoFieldRecordKey}>
          <Text style={styles.infoFieldRecordKeyText}>
            {distanceInfo.amount}
          </Text>
        </View>

        <View style={styles.inputFieldRecordValue}>
          <Text style={styles.infoFieldRecordKeyText}>
            {`Rs. ${calculateJourneyFare(50, information.distance)}` ||
              " Not Found"}
          </Text>
        </View>
      </View>

      <View style={styles.infoFieldRecord}>
        <View style={styles.infoFieldRecordKey}>
          <Text style={styles.infoFieldRecordKeyText}>
            {distanceInfo.status}
          </Text>
        </View>

        <View style={styles.inputFieldRecordValue}>
          <Text style={styles.infoFieldRecordKeyText}>
            {information?.status || " Not Found"}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});
