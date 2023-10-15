import { Image, Text, TouchableOpacity, View } from "react-native";
import { logoImage } from "../../assets/imageIndex";
import { styles } from "../../styles/commonHeader";
import { globalStyles } from "../../styles/global";

export const Header = ({ title, showOptions, navigation }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image source={logoImage} style={styles.logo} />
      </TouchableOpacity>
      <View>
        <Text style={globalStyles.titleText}>{title}</Text>
      </View>
    </View>
  );
};
