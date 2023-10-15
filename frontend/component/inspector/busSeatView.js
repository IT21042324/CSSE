import { FlatList, View } from "react-native";

import { BusSeat } from "./busSeat";
import { busSeatViewText } from "../../contants/strings";
import { styles } from "../../styles/busSeatView";

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
