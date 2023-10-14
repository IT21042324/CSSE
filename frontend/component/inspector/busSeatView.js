import { FlatList, StyleSheet, View } from "react-native";
import {
  flexDirections,
  flexValues,
  padding,
  position,
} from "../../contants/globalConstants";
import { BusSeat } from "./busSeat";
import { busSeatViewText } from "../../contants/strings";

export const BusSeatView = ({ seatInfo }) => {
  const { row } = seatInfo;
  const col = busSeatViewText.cols;

  const seats = Array(row * col)
    .fill()
    .map((_, i) => ({
      id: i + 1,
    }));

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={seats}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <BusSeat seatNo={item.id} />}
        numColumns={col}
      />
      <View style={styles.backSeatRow}>
        {seats.slice(row * col).map((seat) => (
          <BusSeat key={seat.id} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: flexValues.full,
    alignItems: position.center,
    padding: padding.small,
  },
  backSeatRow: {
    flexDirection: flexDirections.row,
  },
});
