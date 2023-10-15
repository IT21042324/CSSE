import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Tooltip from "react-native-walkthrough-tooltip";
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
  width,
  widthVariants,
} from "../../contants/globalConstants";
import { busSeatString } from "../../contants/strings";
import { getSeatData } from "../../asyncStorage/busAllocation";
import { findObjectLength } from "../../miscellaneous/helper";

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

const styles = StyleSheet.create({
  seatContainer: {
    width: width.seatWidth,
    height: height.seatHeight,
    borderRadius: borderRadius.busSeat,
    margin: margin.xSmall,
  },
  seatNoContainer: {
    justifyContent: position.center,
    alignItems: position.center,
    flex: flexValues.full,
  },
  seatNoText: {
    color: colorVariants.white,
    fontFamily: fontFamily.titleText,
    fontSize: fontSize.large,
  },
  seatInfoContainer: {
    minWidth: widthVariants.full,
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
