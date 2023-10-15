import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Tooltip from "react-native-walkthrough-tooltip";
import { getSeatData } from "../../asyncStorage/busAllocation";
import { colorVariants, position } from "../../contants/globalConstants";
import { busSeatString } from "../../contants/strings";
import { findObjectLength } from "../../miscellaneous/helper";
import { styles } from "../../styles/busSeat";

export const BusSeat = ({ seatNo }) => {
  const [toolTipVisible, setToolTipVisible] = useState(false);
  const [seatInfo, setSeatInfo] = useState({});
  const [isSeatBooked, setIsSeatBooked] = useState(false);

  useEffect(() => {
    async function getSeatInfo() {
      const seatInformation = await getSeatData(seatNo);

      if (seatInformation) {
        setSeatInfo(seatInformation);
        setIsSeatBooked(true);
      } else {
        setIsSeatBooked(false);
      }
    }

    getSeatInfo();
  }, []);

  return (
    <TouchableOpacity
      style={[
        styles.seatContainer,
        {
          backgroundColor: isSeatBooked
            ? colorVariants.helonica
            : colorVariants.available,
        },
      ]}
      onPress={() => setToolTipVisible(true)}
    >
      <View style={styles.seatNoContainer}>
        <Text style={styles.seatNoText}>{seatNo}</Text>
      </View>

      <Tooltip
        isVisible={toolTipVisible}
        content={
          <View style={styles.seatInfoContainer}>
            <View style={styles.seatInfoRecord}>
              <Text style={styles.seatInfoRecordKey}>
                {busSeatString.seatNo}
              </Text>
              <Text style={styles.seatInfoRecordValue}>{seatNo}</Text>
            </View>
            <View style={styles.seatInfoRecord}>
              <Text style={styles.seatInfoRecordKey}>
                {busSeatString.status}
              </Text>
              <Text
                style={[
                  styles.seatInfoRecordValue,
                  {
                    color: isSeatBooked
                      ? colorVariants.occupied
                      : colorVariants.available,
                  },
                ]}
              >
                {findObjectLength(seatInfo) > 0
                  ? busSeatString.occupied
                  : busSeatString.available}
              </Text>
            </View>

            {findObjectLength(seatInfo) > 0 && (
              <>
                <View style={styles.seatInfoRecord}>
                  <Text style={styles.seatInfoRecordKey}>
                    {busSeatString.customer}
                  </Text>
                  <Text style={styles.seatInfoRecordValue}>
                    {seatInfo.name}
                  </Text>
                </View>
                <View style={styles.seatInfoRecord}>
                  <Text style={styles.seatInfoRecordKey}>
                    {busSeatString.startingPoint}
                  </Text>
                  <Text style={styles.seatInfoRecordValue}>
                    {seatInfo.startingPoint}
                  </Text>
                </View>
                <View style={styles.seatInfoRecord}>
                  <Text style={styles.seatInfoRecordKey}>
                    {busSeatString.time}
                  </Text>
                  <Text style={styles.seatInfoRecordValue}>
                    {seatInfo.checkinTime}
                  </Text>
                </View>
              </>
            )}
          </View>
        }
        placement={position.center}
        onClose={() => setToolTipVisible(false)}
      ></Tooltip>
    </TouchableOpacity>
  );
};
