import { useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { PurchaseCreditsText } from "../../contants/strings";

import Toast from "react-native-toast-message";
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
import { MakeApiCall } from "../../api/apiCalls";

const createInputFieldRecord = (
  keyText,
  onChangeTextHandler,
  defaultValue,
  keyboardType = "default",
  editable = true
) => (
  <View style={styles.inputFieldRecord}>
    <View style={styles.inputFieldRecordKey}>
      <Text style={styles.inputFieldRecordKeyText}>{keyText}</Text>
    </View>

    <View style={styles.inputFieldRecordValue}>
      <TextInput
        style={
          editable ? styles.inputFieldRecordTextInput : styles.disabledTextField
        }
        onChangeText={onChangeTextHandler}
        defaultValue={defaultValue?.toString()}
        keyboardType={keyboardType}
        editable={editable}
      />
    </View>
  </View>
);

export default function PurchaseCredits({ navigation }) {
  const defaultCreditValue = navigation.getParam("credits") || 0;
  const defaultAmountValue = navigation.getParam("amount") || "Rs. 0";

  const [userName, setUserName] = useState("");
  const [credits, setCredits] = useState(defaultCreditValue);
  const [amount, setAmount] = useState(defaultAmountValue);
  const [isLoading, setIsLoading] = useState(false);

  const { purchaseCredits } = MakeApiCall();

  const onPressHandler = () => {
    const data = purchaseCredits({
      userName,
      amount,
      credits,
      inspectorId: "652aec3ccea326f999410998",
    });

    const { updatedUserInfo } = data;
    console.log(updatedUserInfo);

    setIsLoading(false);
    navigation.navigate("Inspection");

    if (updatedUserInfo)
      Toast.show({
        type: "success",
        text1: PurchaseCreditsText.transactionSuccessToastMessage,
        text2: `${credits} Credits  Added to ${userName}`,
      });
    else
      Toast.show({
        type: "error",
        text1: PurchaseCreditsText.tranactionFailureToastMessage,
      });
  };

  return (
    <ScrollView style={styles.distanceContainer}>
      <View style={styles.inputFieldContainer}>
        {createInputFieldRecord(PurchaseCreditsText.userName, (text) =>
          setUserName(text)
        )}
        {createInputFieldRecord(
          PurchaseCreditsText.credits,
          (text) => setCredits(text),
          defaultCreditValue,
          "number-pad"
        )}
        {createInputFieldRecord(
          PurchaseCreditsText.amount,
          (text) => setAmount(text),
          defaultAmountValue,
          "default",
          false
        )}

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
