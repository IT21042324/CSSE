import { Text, View, TouchableOpacity } from "react-native";
import { ScreenKey, distanceInfo } from "../contants/strings";
import { flexValues, position, width } from "../contants/globalConstants";
import {
  calculateJourneyFare,
  calculateRequiredCredits,
} from "../miscellaneous/helper";
import { styles } from "../styles/distanceInfo";

export const DistanceInfo = ({ information, backPressHandler, navigation }) => {
  const onPressHandler = () => {
    navigation.navigate(ScreenKey.PurchaseCredits, {
      ...information,
      credits: calculateRequiredCredits(
        distanceInfo.creditsPerKm,
        information.distance
      ),
      amount: calculateJourneyFare(
        distanceInfo.costPerKm,
        information.distance
      ),
    });
  };

  return (
    <View style={styles.infoContainer}>
      <TouchableOpacity style={styles.backContainer} onPress={backPressHandler}>
        <Text style={styles.backIconText}>{distanceInfo.back}</Text>
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
            {information?.origin_addresses || distanceInfo.notFound}
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
            {information?.destination_addresses || distanceInfo.notFound}
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
            {information?.distance || distanceInfo.notFound}
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
            {information?.duration || distanceInfo.notFound}
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
            {`${calculateRequiredCredits(
              distanceInfo.creditsPerKm,
              information.distance
            )}` || distanceInfo.notFound}
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
            {`${calculateJourneyFare(
              distanceInfo.costPerKm,
              information.distance
            )}` || distanceInfo.notFound}
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
            {information?.status || distanceInfo.notFound}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.buyCreditsContainer}
        onPress={onPressHandler}
      >
        <Text style={styles.buyCreditsContainerText}>
          {distanceInfo.purchaseCredit}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
