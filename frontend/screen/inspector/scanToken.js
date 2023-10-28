import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ScannedTokenDetailsContainer } from "../../component/ScannedTokenDetailsContainer";
import { InquryForm } from "../../component/inspector/inquiryForm";
import { InspectorFirstHalfComponent } from "../../component/inspector/inspectorImage";
import QrScannner from "../../component/qrScanner";
import { position, scanTokenPage } from "../../contants/globalConstants";
import { ScanQRPageText } from "../../contants/strings";
import {
  checkIfScannedQrIsValid,
  convertStringToJson,
} from "../../miscellaneous/helper";
import { styles } from "../../styles/scanToken";

const createButton = (onPressHandler, btnText) => (
  <TouchableOpacity style={styles.scanBtn} onPress={onPressHandler}>
    <Text style={styles.scanBtnText}>{btnText}</Text>
  </TouchableOpacity>
);

export default function ScanToken({ navigation }) {
  const [isCameraOpen, setIsCameraOpen] = useState(true);
  const [isQrDetailsVisible, setIsQrDetailsVisible] = useState(false);
  const [dataFromQR, setDataFromQR] = useState({});
  const [isValidInfo, setValidInfo] = useState(false);

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

            {!isCameraOpen && isQrDetailsVisible && (
              <ScannedTokenDetailsContainer
                dataFromQR={dataFromQR}
                isValidInfo={isValidInfo}
              />
            )}
          </View>

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
