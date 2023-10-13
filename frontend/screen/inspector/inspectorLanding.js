import { StyleSheet, View } from "react-native";
import { InspectorFirstHalfComponent } from "../../component/inspector/inspectorImage";
import { InspectorOptionContainer } from "../../component/inspector/inspectorOptionsContiner";
import { flexValues, margin } from "../../contants/globalConstants";

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
