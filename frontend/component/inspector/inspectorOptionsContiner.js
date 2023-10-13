import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  colorVariants,
  commonValues,
  flexDirections,
  flexValues,
  fontFamily,
  fontSize,
  fontWeight,
  margin,
  padding,
  position,
  width,
} from "../../contants/globalConstants";
import {
  ScreenKey,
  inspectorLandingScreenOptions,
  screenHeadings,
} from "../../contants/strings";

export const InspectorOptionContainer = ({ navigation }) => {
  const onOptionSelectionHandler = (screen) => {
    if (screen === screenHeadings.validateToken) {
      navigation.navigate(ScreenKey.ValidateToken);
    } else if (screen === screenHeadings.viewAllocation) {
      navigation.navigate(ScreenKey.ViewAllocation);
    } else if (screen === screenHeadings.viewRoute) {
      navigation.navigate(ScreenKey.ViewRoute);
    } else if (screen === screenHeadings.distanceCaluclator) {
      navigation.navigate(ScreenKey.DistanceCalculator);
    }
  };
  return (
    <View style={styles.optionsContainer}>
      <FlatList
        data={inspectorLandingScreenOptions}
        keyExtractor={(item) => item}
        numColumns={2}
        columnWrapperStyle={styles.rowContainer}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onOptionSelectionHandler(item)}>
            <View style={styles.singleOption}>
              <Text style={styles.singleOptionTextColor}>{item}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    margin: margin.small,
    flex: flexValues.full,
  },
  optionsContainer: {
    flex: flexValues.full,
    marginTop: margin.xxxLarge,
    paddingTop: padding.singleOptionPaddingTop,
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
    width: width.InspectionSingleOptionsWidth,
    alignItems: position.center,
  },
  singleOptionTextColor: {
    color: colorVariants.white,
    fontFamily: fontFamily.inspectorOptionsText,
    fontWeight: fontWeight.bold,
    fontSize: fontSize.medium,
    alignItems: position.center,
    justifyContent: position.center,
    alignSelf: position.center,
  },
});
