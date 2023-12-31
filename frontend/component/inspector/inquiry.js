import React from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { colorVariants } from "../../contants/globalConstants";
import { InquryForm } from "./inquiryForm";
import { inquiryText } from "../../contants/strings";

const ModalContent = ({
  changeVisibility,
  storeDetails,
  storeUpdateStatus,
}) => {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>{inquiryText.makeInq}</Text>
      <InquryForm
        changeVisibility={changeVisibility}
        storeDetails={storeDetails}
        storeUpdateStatus={storeUpdateStatus}
      />
      <Pressable style={styles.buttonClose} onPress={changeVisibility}>
        <Text style={styles.textStyle}>{inquiryText.close}</Text>
      </Pressable>
    </View>
  );
};

export const UpdateStoreModal = ({
  changeModalVisibility,
  storeDetails,
  storeUpdateStatus,
}) => {
  const changeVisibility = () => {
    changeModalVisibility(false);
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        onRequestClose={changeVisibility}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ModalContent
              changeVisibility={changeVisibility}
              storeDetails={storeDetails}
              storeUpdateStatus={storeUpdateStatus}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: "100%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "dodgerblue",
    padding: 35,
    alignItems: "center",
    shadowColor: "red",
    shadowOffset: {
      width: 20,
      height: 20,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonClose: {
    marginTop: 15,
    backgroundColor: colorVariants.crimson,
    padding: 10,
    elevation: 2,
    width: "100%",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  content: {
    width: "100%",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "dodgerblue",
    textAlign: "center",
  },
});
