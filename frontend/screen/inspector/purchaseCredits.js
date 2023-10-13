import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { PurchaseCreditsText } from "../../contants/strings";
import { useState } from "react";

import {
  borderWidth,
  colorVariants,
  flexDirections,
  flexValues,
  fontFamily,
  fontSize,
  fontWeight,
  margin,
  padding,
  position,
  size,
} from "../../contants/globalConstants";
import Toast from "react-native-toast-message";

export default function PurchaseCredits({ navigation }) {
  const defaultCreditValue = navigation.getParam("credits") || 0;
  const defaultAmountValue = navigation.getParam("amount") || "Rs. 0";

  const [userName, setUserName] = useState("");
  const [credits, setCredits] = useState(defaultCreditValue);
  const [amount, setAmount] = useState(defaultAmountValue);
  const [isLoading, setIsLoading] = useState(false);

  const onPressHandler = () => {
    //make the axios call
    //after that say setIsLoading(false) to stop showing activityindicator
    //then say navigation.navigate("Inspection");
    navigation.navigate("Inspection");
    Toast.show({
      text1: "Transaction Successful",
      text2: `${credits} Credits  Added to ${userName}`,
    });
  };

  return (
    <ScrollView style={styles.distanceContainer}>
      <View style={styles.inputFieldContainer}>
        <View style={styles.inputFieldRecord}>
          <View style={styles.inputFieldRecordKey}>
            <Text style={styles.inputFieldRecordKeyText}>
              {PurchaseCreditsText.userId}
            </Text>
          </View>

          <View style={styles.inputFieldRecordValue}>
            <TextInput
              style={styles.inputFieldRecordTextInput}
              onChangeText={(text) => setUserName(text)}
            />
          </View>
        </View>

        <View style={styles.inputFieldRecord}>
          <View style={styles.inputFieldRecordKey}>
            <Text style={styles.inputFieldRecordKeyText}>
              {PurchaseCreditsText.credits}
            </Text>
          </View>

          <View style={styles.inputFieldRecordValue}>
            <TextInput
              style={styles.inputFieldRecordTextInput}
              onChangeText={(text) => setCredits(text)}
              defaultValue={defaultCreditValue?.toString()}
              keyboardType="number-pad"
            />
          </View>
        </View>

        <View style={styles.inputFieldRecord}>
          <View style={styles.inputFieldRecordKey}>
            <Text style={styles.inputFieldRecordKeyText}>
              {PurchaseCreditsText.amount}
            </Text>
          </View>

          <View style={styles.inputFieldRecordValue}>
            <TextInput
              style={styles.disabledTextField}
              onChangeText={(text) => setAmount(text)}
              defaultValue={defaultAmountValue?.toString()}
              editable={false}
            />
          </View>
        </View>

        {isLoading ? (
          <ActivityIndicator
            style={styles.activityIndication}
            color={colorVariants.dodgerblue}
            size={size.large}
          />
        ) : (
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={onPressHandler}
          >
            <Text style={styles.btnContainerText}>
              {PurchaseCreditsText.purchaseCredits}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
}

export const styles = StyleSheet.create({
  distanceContainer: {
    flex: flexValues.full,
    flexGrow: flexValues.full,
  },
  inputFieldContainer: {
    padding: padding.small,
    backgroundColor: colorVariants.white,
  },
  inputFieldRecord: {},
  inputFieldRecordKey: {
    paddingTop: padding.xxSmall,
  },
  inputFieldRecordValue: {
    paddingBottom: padding.xxSmall,
  },
  inputFieldRecordKeyText: {
    fontFamily: fontFamily.subTitleText,
    fontSize: fontSize.medium,
  },
  inputFieldRecordTextInput: {
    fontFamily: fontFamily.subTitleText,
    fontSize: fontSize.large,
    borderWidth: borderWidth.formField,
    padding: padding.xxxSmall,
  },
  disabledTextField: {
    fontFamily: fontFamily.subTitleText,
    fontSize: fontSize.large,
    borderWidth: borderWidth.formField,
    padding: padding.xxxSmall,
    backgroundColor: colorVariants.lightGray,
    borderColor: colorVariants.lightGray,
  },
  btnContainer: {
    flexDirection: flexDirections.row,
    justifyContent: position.center,
    padding: padding.small,
    backgroundColor: colorVariants.babyBlue,
    marginTop: margin.xxSmall,
  },
  btnContainerText: {
    fontFamily: fontFamily.subTitleText,
    fontSize: fontSize.medium,
    color: colorVariants.white,
    fontWeight: fontWeight.bold,
  },
  activityIndication: {
    flexDirection: flexDirections.row,
    justifyContent: position.center,
    padding: padding.small,
  },
});
