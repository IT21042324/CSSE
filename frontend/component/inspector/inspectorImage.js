import { View, Image, StyleSheet } from "react-native";
import { position, padding } from "../../contants/globalConstants";

export const InspectorFirstHalfComponent = () => {
  return (
    <View style={styles.inspectorImage}>
      <Image
        source={require("../../assets/inspector.png")}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inspectorImage: {
    alignItems: position.center,
    justifyContent: position.center,
    padding: padding.small,
  },
});
