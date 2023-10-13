import { Image, StyleSheet, View } from "react-native";
import { padding, position } from "../../contants/globalConstants";

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
