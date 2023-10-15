import { Image, Text, View } from "react-native";
import { passengerImage } from "../assets/imageIndex";
import { resizeMode } from "../contants/globalConstants";
import {
  getDateFromCheckInDate,
  getTimeFronCheckinDate,
} from "../miscellaneous/helper";
import { useEffect } from "react";
import { storeSeatData } from "../asyncStorage/busAllocation";
import { styles } from "../styles/ScannedTokenDetailsContainer";
import { scannedTokenDetailsContainerText } from "../contants/strings";

export const ScannedTokenDetailsContainer = ({ dataFromQR, isValidInfo }) => {
  useEffect(() => {
    async function storeBusSeatData() {
      isValidInfo && (await storeSeatData(dataFromQR));
    }
    storeBusSeatData();
  }, []);

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
          <Text style={styles.travelInfoRowKey}>
            {scannedTokenDetailsContainerText.boardingPoint}
          </Text>
          <Text style={styles.travelInfoRowValue}>
            {dataFromQR.startingPoint}
          </Text>
        </View>
        <View style={styles.travelInfoRow}>
          <Text style={styles.travelInfoRowKey}>
            {scannedTokenDetailsContainerText.checkInTime}
          </Text>
          <Text style={styles.travelInfoRowValue}>
            {getTimeFronCheckinDate(dataFromQR.checkInDate)}
          </Text>
        </View>
        <View style={styles.travelInfoRow}>
          <Text style={styles.travelInfoRowKey}>
            {scannedTokenDetailsContainerText.checkInDate}
          </Text>
          <Text style={styles.travelInfoRowValue}>
            {getDateFromCheckInDate(dataFromQR.checkInDate)}
          </Text>
        </View>
      </View>
    </View>
  );
};
