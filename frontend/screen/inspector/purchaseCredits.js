import { useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Toast from "react-native-toast-message";
import { MakeApiCall } from "../../api/apiCalls";
import { colorVariants } from "../../contants/globalConstants";
import { PurchaseCreditsText } from "../../contants/strings";
import { styles } from "../../styles/purchaseCredits";
import { UseUserContext } from "../../useHooks/user";

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

  const { user } = UseUserContext();

  const onPressHandler = async () => {
    const parsedCredits = parseInt(credits);

    const data = await purchaseCredits({
      userName,
      amount,
      credits: parsedCredits,
      inspectorId: user._id,
    });

    const { updatedUserInfo } = data;

    setIsLoading(false);

    if (updatedUserInfo) {
      navigation.navigate("Inspection");

      Toast.show({
        type: "success",
        text1: PurchaseCreditsText.transactionSuccessToastMessage,
        text2: `${credits} Credits  Added to ${userName}`,
      });
    } else
      Toast.show({
        type: "error",
        text1: PurchaseCreditsText.tranactionFailureToastMessage,
        text2: "Please verify if user name is correct",
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
