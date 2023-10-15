import { Image, View } from "react-native";
import { styles } from "../../styles/inspectorFirstHalfComponent";

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
