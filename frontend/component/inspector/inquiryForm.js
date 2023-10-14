import { Formik } from "formik";
import { useState } from "react";
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as yup from "yup";
import {
  borderRadius,
  borderWidth,
  colorVariants,
  currDate,
  currTime,
  flexDirections,
  fontFamily,
  fontSize,
  inquiryForm,
  margin,
  padding,
  position,
} from "../../contants/globalConstants";
import {
  inquiryFormText,
  inquirySelectionOptions,
} from "../../contants/strings";
import { globalStyles } from "../../styles/global";
import { DropDown } from "../dropDownPicker";

const StoreSchema = yup.object({
  penaltyAmount: yup
    .number()
    .required()
    .min(0, inquiryFormText.enterValidAmount),
  description: yup.string().required().min(2, inquiryFormText.enterInqDesc),
  inquiryType: yup.string().required(inquiryFormText.enterInqType),
});

export const InquryForm = ({ dataFromQR, formHandler }) => {
  const [showActivityIndicator, setShowActivityIndicator] = useState(false);

  const [inquiryType, setInquiryType] = useState("");
  const inquirySelectionHandler = (val) => {
    setInquiryType(val);
  };

  const onSubmitHandler = async (values) => {};

  return (
    <Formik
      initialValues={{
        penaltyAmount: 0,
        description: "",
      }}
      validationSchema={StoreSchema}
      onSubmit={(values, actions) => {
        actions.resetForm();
        onSubmitHandler(values);
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

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colorVariants.whiteSmoke,
    borderWidth: borderWidth.formOutset,
    borderColor: colorVariants.babyBlue,
    padding: padding.xSmall,
    justifyContent: position.center,
  },
  inquiryFormHeadingContainer: {
    flexDirection: flexDirections.row,
    justifyContent: position.spaceBetween,
    paddingBottom: padding.xSmall,
  },
  inquiryFormHeadingContainerText: {
    fontFamily: fontFamily.titleText,
    fontSize: fontSize.xLarge,
  },
  commonDetailsRecord: {
    flexDirection: flexDirections.row,
    justifyContent: position.spaceBetween,
    marginTop: margin.xSmall,
  },
  commonDetailsRecordKey: {
    fontFamily: fontFamily.subTitleText,
    fontSize: fontSize.medium,
  },
  commonDetailsRecordValue: {
    fontFamily: fontFamily.subTitleText,
    fontSize: fontSize.medium,
    color: colorVariants.gray,
  },
  formInputContainer: {
    marginTop: margin.xxSmall,
    padding: padding.xxSmall,
    backgroundColor: colorVariants.white,
  },
  textInput: {
    borderWidth: borderWidth.formField,
    padding: padding.xxSmall,
    fontSize: fontSize.medium,
    borderRadius: borderRadius.textInput,
    marginTop: margin.xxSmall,
  },
});
