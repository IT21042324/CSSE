import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  borderWidth,
  colorVariants,
  flexDirections,
  flexValues,
  fontFamily,
  fontSize,
  fontWeight,
  padding,
  position,
} from "../../contants/globalConstants";
import {
  distanceCaluclator,
  distanceCaluclatorError,
} from "../../contants/strings";
import { useState } from "react";
import { MakeApiCall } from "../../api/apiCalls";
import { findObjectLength } from "../../miscellaneous/helper";
import { DistanceInfo } from "../../component/distanceInfo";
import Toast from "react-native-toast-message";

export const DistanceCalculator = () => {
  const [origins, setOrigins] = useState("");
  const [destinations, setDestinations] = useState("");
  const [distanceInfo, setDistanceInfo] = useState({});
  const [isInfoResultsVisible, setIsInfoResultsVisible] = useState(false);

  const { getDistance } = MakeApiCall();

  const onPressHandler = async () => {
    try {
      if (origins && destinations) {
        const distanceResults = await getDistance(origins, destinations);
        setDistanceInfo(distanceResults);
        console.log(distanceResults);

        if (typeof distanceResults === "string") {
          Toast.show({
            type: "error",
            text1: distanceResults,
          });
        } else if (distanceResults.status === "ZERO_RESULTS") {
          Toast.show({
            type: "error",
            text1: distanceCaluclatorError.invalidLocation,
          });
        } else if (findObjectLength(distanceResults))
          setIsInfoResultsVisible(true);
      } else {
        Toast.show({
          type: "error",
          text1: distanceCaluclatorError.locationUndefined,
        });
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const backPressHandler = () => {
    setIsInfoResultsVisible(false);
    setDistanceInfo({});
  };

  return (
    <ScrollView style={styles.distanceContainer}>
      {isInfoResultsVisible ? (
        <DistanceInfo
          information={distanceInfo}
          backPressHandler={backPressHandler}
        />
      ) : (
        <View style={styles.inputFieldContainer}>
          <View style={styles.inputFieldRecord}>
            <View style={styles.inputFieldRecordKey}>
              <Text style={styles.inputFieldRecordKeyText}>
                {distanceCaluclator.originAddress}
              </Text>
            </View>

            <View style={styles.inputFieldRecordValue}>
              <TextInput
                style={styles.inputFieldRecordTextInput}
                onChangeText={(text) => setOrigins(text)}
              />
            </View>
          </View>

          <View style={styles.inputFieldRecord}>
            <View style={styles.inputFieldRecordKey}>
              <Text style={styles.inputFieldRecordKeyText}>
                {distanceCaluclator.destinationAddress}
              </Text>
            </View>

            <View style={styles.inputFieldRecordValue}>
              <TextInput
                style={styles.inputFieldRecordTextInput}
                onChangeText={(text) => setDestinations(text)}
              />
            </View>
          </View>

          <TouchableOpacity
            style={styles.btnContainer}
            onPress={onPressHandler}
          >
            <Text style={styles.btnContainerText}>Calculate Distance</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
  btnContainer: {
    flexDirection: flexDirections.row,
    justifyContent: position.center,
    padding: padding.small,
    backgroundColor: colorVariants.babyBlue,
  },
  btnContainerText: {
    fontFamily: fontFamily.subTitleText,
    fontSize: fontSize.medium,
    color: colorVariants.white,
    fontWeight: fontWeight.bold,
  },
});
