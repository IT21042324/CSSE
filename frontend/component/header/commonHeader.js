import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { logoImage } from "../../assets/imageIndex";
import { clearSeatAllocations } from "../../asyncStorage/busAllocation";
import { optionsIcon } from "../../contants/components";
import { styles } from "../../styles/commonHeader";
import { globalStyles } from "../../styles/global";

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
