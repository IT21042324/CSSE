import { View, StyleSheet, Text, Image } from "react-native";
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
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    letterSpacing: 1,
  },
  logoContainer: {
    position: "absolute",
    right: 0,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
  },
  logo: {
    height: "280%",
    width: "100%",
    right: 0,
  },
});
