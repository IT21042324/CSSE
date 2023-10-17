import { FlatList, Text, TouchableOpacity, View } from "react-native";
import {
  ScreenKey,
  inspectorLandingScreenOptions,
  screenHeadings,
} from "../../contants/strings";
import { styles } from "../../styles/inspectorOptionsContiner";

export const InspectorOptionContainer = ({ navigation }) => {
  const onOptionSelectionHandler = (screen) => {
    if (screen === screenHeadings.validateToken) {
      navigation.navigate(ScreenKey.ValidateToken);
    } else if (screen === screenHeadings.viewAllocation) {
      navigation.navigate(ScreenKey.ViewAllocation);
    } else if (screen === screenHeadings.viewRoute) {
      navigation.navigate(ScreenKey.ViewRoute);
    } else if (screen === screenHeadings.distanceCaluclator) {
      navigation.navigate(ScreenKey.DistanceCalculator);
    } else if (screen === screenHeadings.readInquiries) {
      navigation.navigate(ScreenKey.ReadInquiries);
    } else if (screen === screenHeadings.Settings) {
      navigation.navigate(ScreenKey.Settings);
    }
  };
  return (
    <View style={styles.optionsContainer}>
      <FlatList
        data={inspectorLandingScreenOptions}
        keyExtractor={(item) => item}
        numColumns={2}
        columnWrapperStyle={styles.rowContainer}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onOptionSelectionHandler(item)}>
            <View style={styles.singleOption}>
              <Text style={styles.singleOptionTextColor}>{item}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
