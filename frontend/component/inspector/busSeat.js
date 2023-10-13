import { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import Tooltip from "react-native-walkthrough-tooltip";
import {
  borderRadius,
  colorVariants,
  flexDirections,
  fontFamily,
  fontSize,
  height,
  margin,
  padding,
  position,
  width,
} from "../../contants/globalConstants";
import { busSeatString } from "../../contants/strings";

export const BusSeat = ({ seatNo }) => {
  const [toolTipVisible, setToolTipVisible] = useState(false);

  const windowWidth = useWindowDimensions().width;

  return (
    <TouchableOpacity
      style={styles.seatContainer}
      onPress={() => setToolTipVisible(true)}
    >
      <View style={styles.seatNoContainer}>
        <Text style={styles.seatNoText}>{seatNo || 1}</Text>
      </View>

      <Tooltip
        isVisible={toolTipVisible}
        content={
          <View style={styles.seatInfoContainer}>
            <View style={styles.seatInfoRecord}>
              <Text style={styles.seatInfoRecordKey}>
                {busSeatString.seatNo}
              </Text>
              <Text style={styles.seatInfoRecordValue}>1</Text>
            </View>
            <View style={styles.seatInfoRecord}>
              <Text style={styles.seatInfoRecordKey}>
                {busSeatString.status}
              </Text>
              <Text style={styles.seatInfoRecordValue}>Booked</Text>
            </View>
            <View style={styles.seatInfoRecord}>
              <Text style={styles.seatInfoRecordKey}>
                {busSeatString.customer}
              </Text>
              <Text style={styles.seatInfoRecordValue}>Sam Dutts</Text>
            </View>
            <View style={styles.seatInfoRecord}>
              <Text style={styles.seatInfoRecordKey}>
                {busSeatString.startingPoint}
              </Text>
              <Text style={styles.seatInfoRecordValue}>Malabe</Text>
            </View>
            <View style={styles.seatInfoRecord}>
              <Text style={styles.seatInfoRecordKey}>{busSeatString.time}</Text>
              <Text style={styles.seatInfoRecordValue}>22:00</Text>
            </View>
          </View>
        }
        placement="center"
        onClose={() => setToolTipVisible(false)}
      ></Tooltip>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  seatContainer: {
    backgroundColor: colorVariants.babyBlue,
    width: width.seatWidth,
    height: height.seatHeight,
    borderRadius: borderRadius.busSeat,
    margin: margin.xSmall,
  },
  seatNoContainer: { justifyContent: "center", alignItems: "center", flex: 1 },
  seatNoText: {
    color: colorVariants.white,
    fontFamily: fontFamily.titleText,
    fontSize: fontSize.large,
  },
  seatInfoContainer: {
    minWidth: "100%",
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
