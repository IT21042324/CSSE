import { Image, StyleSheet, Text, View } from "react-native";
import { logoImage } from "../../assets/imageIndex";
import {
  flexDirections,
  fontSize,
  height,
  position,
  width,
} from "../../contants/globalConstants";
import { globalStyles } from "../../styles/global";

export const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <Image source={logoImage} style={styles.logo} />
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
