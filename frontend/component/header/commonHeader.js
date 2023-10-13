import { Image, StyleSheet, Text, View } from "react-native";
import {
  flexDirections,
  height,
  position,
  width,
} from "../../contants/globalConstants";
import { globalStyles } from "../../styles/global";

export const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
      </View>
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
    fontSize: 20,
    letterSpacing: 1,
  },
  logoContainer: {
    position: position.absolute,
    right: 0,
    height: height.full,
    alignItems: position.center,
    justifyContent: position.center,
    width: 40,
  },
  logo: {
    height: height.logoHeight,
    width: width.full,
    right: position.none,
  },
});
