import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { logoImage } from "../../assets/imageIndex";
import {
  flexDirections,
  fontSize,
  height,
  position,
  width,
} from "../../contants/globalConstants";
import { globalStyles } from "../../styles/global";
import { optionsIcon } from "../../contants/components";
import { clearSeatAllocations } from "../../asyncStorage/busAllocation";

export const Header = ({ title, showOptions }) => {
  const clearAllAllocation = async () => {
    Alert.alert();
    await clearSeatAllocations();
  };

  return (
    <View style={styles.header}>
      {showOptions ? (
        <View style={styles.logoContainer}>{optionsIcon}</View>
      ) : (
        <TouchableOpacity
          style={styles.logoContainer}
          onPress={clearAllAllocation}
        >
          <Image source={logoImage} style={styles.logo} />
        </TouchableOpacity>
      )}
      <View>
        <Text style={globalStyles.titleText}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: width.full,
    height: height.full,
    flexDirection: flexDirections.row,
    alignItems: position.center,
  },
  headerText: {
    fontSize: fontSize.large,
    letterSpacing: 1,
  },
  logoContainer: {
    position: position.absolute,
    right: position.none,
    height: height.full,
    alignItems: position.center,
    justifyContent: position.center,
    width: width.logoContainer,
  },
  logo: {
    height: height.logoHeight,
    width: width.full,
    right: position.none,
  },
});
