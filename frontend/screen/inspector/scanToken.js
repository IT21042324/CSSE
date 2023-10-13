import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  height,
  margin,
  padding,
  colorVariants,
  fontSize,
  position,
  fontWeight,
  flexDirections,
  fontFamily,
  width,
  resizeMode,
  flexValues,
  scanTokenPage,
  borderRadius,
} from "../../contants/globalConstants";
import { InspectorFirstHalfComponent } from "../../component/inspector/inspectorImage";
import QrScannner from "../../component/qrScanner";
import { useState } from "react";
import { qrImage } from "../../assets/imageIndex";
import { ScannedTokenDetailsContainer } from "../../component/ScannedTokenDetailsContainer";
import { ScanQRPageText } from "../../contants/strings";
import { InquryForm } from "../../component/inspector/inquiryForm";

const createButton = (onPressHandler, btnText) => (
  <TouchableOpacity style={styles.scanBtn} onPress={onPressHandler}>
    <Text style={styles.scanBtnText}>{btnText}</Text>
  </TouchableOpacity>
);

export default function ScanToken({ navigation }) {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [isQrDetailsVisible, setIsQrDetailsVisible] = useState(true);
  const [dataFromQR, setDataFromQR] = useState({});

  const qrBtnPressHandler = (status) => {
    setIsCameraOpen(status);
  };

  const onQRScanned = (type, data) => {
    setIsCameraOpen(false);
    setDataFromQR(data);
    console.log(data);
  };

  const [modalVisible, setModalVisible] = useState(false);

  const formHandler = (status) => {
    setModalVisible(status);
  };

  return (
    <ScrollView
      contentContainerStyle={{
        ...styles.mainContainer,
        justifyContent: modalVisible ? "center" : undefined,
      }}
    >
      {modalVisible ? (
        <InquryForm formHandler={formHandler} />
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

          {isCameraOpen &&
            createButton(
              () => qrBtnPressHandler(true),
              ScanQRPageText.ScanQrBtnText
            )}

          {!isCameraOpen &&
            !isQrDetailsVisible &&
            createButton(
              () => qrBtnPressHandler(false),
              ScanQRPageText.closeScannerBtnText
            )}

          {!isCameraOpen && isQrDetailsVisible && (
            <View style={styles.tokenStatusContainer}>
              <View style={styles.tokenStatusDetailsContainer}>
                {dataFromQR.validInfo ? (
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
              {createButton(
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
