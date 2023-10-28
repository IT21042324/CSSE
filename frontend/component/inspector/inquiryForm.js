import { Formik } from "formik";
import { useState } from "react";
import {
  ActivityIndicator,
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as yup from "yup";
import {
  colorVariants,
  currDate,
  currTime,
  inquiryForm,
} from "../../contants/globalConstants";
import {
  inquiryFormText,
  inquiryFormTexts,
  inquirySelectionOptions,
} from "../../contants/strings";
import { globalStyles } from "../../styles/global";
import { DropDown } from "../dropDownPicker";
import { MakeApiCall } from "../../api/apiCalls";
import Toast from "react-native-toast-message";
import { styles } from "../../styles/inquiryForm";
import { UseUserContext } from "../../useHooks/user";

const FormSchema = yup.object({
  penaltyAmount: yup
    .number()
    .required()
    .min(0, inquiryFormText.enterValidAmount),
  description: yup.string().required().min(2, inquiryFormText.enterInqDesc),
});

export const InquryForm = ({ dataFromQR, formHandler, navigation }) => {
  const [showActivityIndicator, setShowActivityIndicator] = useState(false);

  const [inquiryType, setInquiryType] = useState("");
  const inquirySelectionHandler = (val) => {
    setInquiryType(val);
  };

  const { makeInquiry } = MakeApiCall();

  const { user } = UseUserContext();

  const onSubmitHandler = async (values) => {
    const penaltyAm = values.penaltyAmount;

    console.log({
      ...values,
      penaltyAmount: `Rs. ${penaltyAm}`,
      userName: dataFromQR?.userName || "unknown",
      startingPoint: dataFromQR.startingPoint || "unknown",
      inspectorId: user._id,
      inquiryType,
    });

    setShowActivityIndicator(true);

    const data = await makeInquiry({
      ...values,
      penaltyAmount: `Rs. ${penaltyAm}`,
      userName: dataFromQR?.userName || "unknown",
      startingPoint: dataFromQR.startingPoint || "unknown",
      inspectorId: user._id,
      inquiryType,
    });

    if (data?._id) {
      navigation.navigate("Inspection");

      Toast.show({
        type: "success",
        text1: inquiryFormTexts.inquirySubmittedTextMessage,
      });
      setShowActivityIndicator(false);
    } else {
      Toast.show({
        type: "error",
        text1: inquiryFormTexts.inquiryFormFailureToast,
      });
      setShowActivityIndicator(false);
    }
  };

  return (
    <Formik
      initialValues={{
        penaltyAmount: 0,
        description: "",
      }}
      validationSchema={FormSchema}
      onSubmit={async (values, actions) => {
        actions.resetForm();
        console.log(values);
        await onSubmitHandler(values);
      }}
    >
      {(props) => {
        return (
          <View style={styles.mainContainer}>
            <View style={styles.inquiryFormHeadingContainer}>
              <Text style={styles.inquiryFormHeadingContainerText}>
                {inquiryFormText.inquiryForm}
              </Text>
              <TouchableOpacity onPress={() => formHandler(false)}>
                {inquiryForm.closeFormIcon}
              </TouchableOpacity>
            </View>
            <View style={styles.commonDetailsContainer}>
              <View style={styles.commonDetailsRecord}>
                <Text style={styles.commonDetailsRecordKey}>
                  {inquiryFormText.name}
                </Text>
                <Text style={styles.commonDetailsRecordValue}>
                  {dataFromQR?.name || "Simon Watts"}
                </Text>
              </View>
              <View style={styles.commonDetailsRecord}>
                <Text style={styles.commonDetailsRecordKey}>
                  {inquiryFormText.startingPoint}
                </Text>
                <Text style={styles.commonDetailsRecordValue}>
                  {dataFromQR?.startingPoint || "Unknown"}
                </Text>
              </View>

              <View style={styles.commonDetailsRecord}>
                <Text style={styles.commonDetailsRecordKey}>
                  {inquiryFormText.time}
                </Text>
                <Text style={styles.commonDetailsRecordValue}>{currTime}</Text>
              </View>

              <View style={styles.commonDetailsRecord}>
                <Text style={styles.commonDetailsRecordKey}>
                  {inquiryFormText.date}
                </Text>
                <Text style={styles.commonDetailsRecordValue}>{currDate}</Text>
              </View>
            </View>

            <View style={styles.formInputContainer}>
              <DropDown
                data={inquirySelectionOptions}
                searchBoolean={false}
                onSelectFunction={inquirySelectionHandler}
                placeholder={inquiryFormText.selectInquiryType}
                form={props}
              />
              <Text style={globalStyles.errorText}>
                {props.touched["inquiryType"] && props.errors["inquiryType"]}
              </Text>

              {inquiryType === inquiryFormText.penalty && (
                <>
                  <TextInput
                    style={styles.textInput}
                    placeholder={inquiryFormText.penaltyAmount}
                    onChangeText={props.handleChange("penaltyAmount")}
                    value={props.values.penaltyAmount}
                    onBlur={props.handleBlur("penaltyAmount")}
                    keyboardType="numeric"
                  />
                  <Text style={globalStyles.errorText}>
                    {props.touched.penaltyAmount && props.errors.penaltyAmount}
                  </Text>
                </>
              )}

              <TextInput
                multiline
                style={styles.textInput}
                placeholder={inquiryFormText.inqDescription}
                onChangeText={props.handleChange("description")}
                value={props.values.description}
                onBlur={props.handleBlur("description")}
              />

              <Text style={globalStyles.errorText}>
                {props.touched.description && props.errors.description}
              </Text>
            </View>

            <View style={{ marginTop: 20 }}>
              {!showActivityIndicator ? (
                <Button
                  title={inquiryFormText.submit}
                  color={colorVariants.babyBlue}
                  onPress={props.handleSubmit}
                />
              ) : (
                <ActivityIndicator
                  size="medium"
                  color={colorVariants.babyBlue}
                />
              )}
            </View>
          </View>
        );
      }}
    </Formik>
  );
};
