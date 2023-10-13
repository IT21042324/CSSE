import { FlatList, StyleSheet, View } from "react-native";
import {
  flexDirections,
  padding,
  position,
} from "../../contants/globalConstants";
import { BusSeat } from "./busSeat";

export const BusSeatView = ({ seatInfo }) => {
  const { row } = seatInfo;
  const col = 4;

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
        renderItem={({ item }) => <BusSeat />}
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
    flex: 1,
    alignItems: position.center,
    padding: padding.small,
  },
  backSeatRow: {
    flexDirection: flexDirections.row,
  },
});
