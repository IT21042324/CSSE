import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import { InspectorFirstHalfComponent } from "../../component/inspector/inspectorImage";
import {
  colorVariants,
  commonValues,
  flexDirections,
  fontSize,
  fontStyle,
  fontWeight,
  margin,
  padding,
  position,
} from "../../contants/globalConstants";

export const inspectorLandingScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <InspectorFirstHalfComponent />
      <View style={styles.optionsContainer}>
        <View style={styles.rowContainer}>
          <TouchableOpacity>
            <View style={styles.singleOption}>
              <Text style={styles.singleOptionTextColor}>Token Validation</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.singleOption}>
              <Text style={styles.singleOptionTextColor}>Token Validation</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.rowContainer}>
          <TouchableOpacity>
            <View style={styles.singleOption}>
              <Text style={styles.singleOptionTextColor}>Token Validation</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.singleOption}>
              <Text style={styles.singleOptionTextColor}>Token Validation</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    margin: margin.small,
    flex: 1,
  },
  optionsContainer: {
    flex: 1,
    marginTop: margin.xxxLarge,
  },
  rowContainer: {
    flexDirection: flexDirections.row,
    justifyContent: position.spaceAround,
    marginBottom: margin.medium,
  },
  singleOption: {
    borderRadius: commonValues.optionsBorderRadius,
    borderRightColor: colorVariants.white,
    padding: padding.medium,
    backgroundColor: colorVariants.babyBlue,
  },
  singleOptionTextColor: {
    color: colorVariants.white,
    fontStyle: fontStyle.inspectorOptionsText,
    fontWeight: fontWeight.bold,
    fontSize: fontSize.medium,
  },
});
