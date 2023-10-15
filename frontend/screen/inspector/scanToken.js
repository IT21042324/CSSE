import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { qrImage } from "../../assets/imageIndex";
import { ScannedTokenDetailsContainer } from "../../component/ScannedTokenDetailsContainer";
import { InquryForm } from "../../component/inspector/inquiryForm";
import { InspectorFirstHalfComponent } from "../../component/inspector/inspectorImage";
import QrScannner from "../../component/qrScanner";
import {
  borderRadius,
  colorVariants,
  flexDirections,
  flexValues,
  fontFamily,
  fontSize,
  fontWeight,
  height,
  margin,
  padding,
  position,
  resizeMode,
  scanTokenPage,
  width,
} from "../../contants/globalConstants";
import { ScanQRPageText } from "../../contants/strings";
import {
  checkIfScannedQrIsValid,
  convertStringToJson,
} from "../../miscellaneous/helper";

const createButton = (onPressHandler, btnText) => (
  <TouchableOpacity style={styles.scanBtn} onPress={onPressHandler}>
    <Text style={styles.scanBtnText}>{btnText}</Text>
  </TouchableOpacity>
);

export default function ScanToken({ navigation }) {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [isQrDetailsVisible, setIsQrDetailsVisible] = useState(false);
  const [dataFromQR, setDataFromQR] = useState({});
  const [isValidInfo, setValidInfo] = useState(false);

  const qrBtnPressHandler = (status) => {
    setIsCameraOpen(status);
    setIsQrDetailsVisible(false);
  };

  const onQRScanned = (type, data) => {
    const qrDataAsJson = convertStringToJson(data);

    setIsCameraOpen(false);
    setDataFromQR(qrDataAsJson);
    setIsQrDetailsVisible(true);
    setValidInfo(checkIfScannedQrIsValid(qrDataAsJson));

    console.log(qrDataAsJson);
  };

  const [modalVisible, setModalVisible] = useState(false);

  const formHandler = (status) => {
    setModalVisible(status);
  };

  return (
    <ScrollView
      contentContainerStyle={{
        ...styles.mainContainer,
        justifyContent: modalVisible ? position.center : undefined,
      }}
    >
      {modalVisible ? (
        <InquryForm
          formHandler={formHandler}
          dataFromQR={dataFromQR}
          navigation={navigation}
        />
      ) : (
        <>
          <InspectorFirstHalfComponent />
          <View style={styles.qrContainer}>
            {isCameraOpen && <QrScannner onQRScanned={onQRScanned} />}
            {!isCameraOpen && !isQrDetailsVisible && (
              <Image
                source={qrImage}
                style={styles.qrImage}
                resizeMode={resizeMode.stretch}
              />
            )}
            {!isCameraOpen && isQrDetailsVisible && (
              <ScannedTokenDetailsContainer dataFromQR={dataFromQR} />
            )}
          </View>

          {!isCameraOpen &&
            !isQrDetailsVisible &&
            createButton(
              () => qrBtnPressHandler(true),
              ScanQRPageText.ScanQrBtnText
            )}

          {isCameraOpen &&
            !isQrDetailsVisible &&
            createButton(
              () => qrBtnPressHandler(false),
              ScanQRPageText.closeScannerBtnText
            )}

          {!isCameraOpen && isQrDetailsVisible && (
            <View style={styles.tokenStatusContainer}>
              <View style={styles.tokenStatusDetailsContainer}>
                {isValidInfo ? (
                  <>
                    {scanTokenPage.tokenValidationIconSuccess}
                    <Text style={styles.tokenStatusText}>
                      {ScanQRPageText.tokenValidationSuccessMessage}
                    </Text>
                  </>
                ) : (
                  <>
                    {scanTokenPage.tokenValidationIconFailure}
                    <Text style={styles.tokenStatusText}>
                      {ScanQRPageText.tokenValidationFailureMessage}
                    </Text>
                  </>
                )}
              </View>
              {!isValidInfo &&
                createButton(
                  () => formHandler(true),
                  ScanQRPageText.issueInquiry
                )}
            </View>
          )}
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: margin.xxSmall,
    flex: flexValues.full,
    backgroundColor: colorVariants.white,
  },
  qrContainer: {
    height: height.qrContainer,
    backgroundColor: colorVariants.babyBlue,
    padding: padding.xxxSmall,
  },
  qrImage: {
    height: height.full,
    width: width.full,
  },
  scanBtn: {
    marginTop: margin.medium,
    padding: padding.small,
    flexDirection: flexDirections.row,
    justifyContent: position.center,
    backgroundColor: colorVariants.babyBlue,
    width: width.qrScannerBtn,
    alignSelf: position.center,
  },
  scanBtnText: {
    color: colorVariants.white,
    fontWeight: fontWeight.bold,
    fontFamily: fontFamily.subTitleText,
    fontSize: fontSize.large,
  },
  tokenStatusContainer: {
    width: width.full,
    marginTop: margin.medium,
    height: height.tokenStatusContainer,
  },
  tokenStatusDetailsContainer: {
    flexDirection: flexDirections.row,
    justifyContent: position.spaceAround,
    alignItems: position.center,
    backgroundColor: colorVariants.whiteSmoke,
    padding: padding.small,
  },
  tokenStatusText: {
    fontFamily: fontFamily.subTitleText,
    fontSize: fontSize.large,
  },
  inquiryBtn: {
    marginTop: margin.medium,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colorVariants.babyBlue,
    padding: padding.xxSmall,
    width: width.half,
    alignSelf: "center",
    borderRadius: borderRadius.inquiryBtn,
  },
  inquiryBtnText: {
    fontFamily: fontFamily.subTitleText,
    fontSize: fontSize.medium,
  },
});
