import { View, StyleSheet } from "react-native";
import { InspectorFirstHalfComponent } from "../../component/inspector/inspectorImage";
import { flexValues, margin } from "../../contants/globalConstants";
import { InspectorOptionContainer } from "../../component/inspector/inspectorOptionsContiner";

export const inspectorLandingScreen = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <InspectorFirstHalfComponent />
      <InspectorOptionContainer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    margin: margin.small,
    flex: flexValues.full,
  },
});
