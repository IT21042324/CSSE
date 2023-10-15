import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { MakeApiCall } from "../../api/apiCalls";
import { getDateFromCheckInDate } from "../../miscellaneous/helper";
import { Picker } from "@react-native-picker/picker";
import { ReadInqText } from "../../contants/strings";

const all = "all";
const AllLabel = "All";
const Other = "Other";
export const ReadInquiries = ({ navigation }) => {
  const { findInqsByInspectorId } = MakeApiCall();
  const [inquiries, setInquiries] = useState([]);
  const [selectedInquiryType, setSelectedInquiryType] = useState(all);

  useEffect(() => {
    async function fetchInquiries() {
      const filteredInqs = await findInqsByInspectorId();
      setInquiries(filteredInqs);
    }

    fetchInquiries();
  }, []);

  const renderInquiryItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={[styles.cell, styles.inquiryType]}>{item.inquiryType}</Text>
      <Text style={[styles.cell, styles.description]}>{item.description}</Text>
      <Text style={[styles.cell, styles.userName]}>{item.userName}</Text>
      {item.inquiryType === ReadInqText.penalty && (
        <Text style={[styles.cell, styles.penaltyAmount]}>
          {item.penaltyAmount}
        </Text>
      )}
      <Text style={[styles.cell, styles.createdAt]}>
        {getDateFromCheckInDate(item.createdAt)}
      </Text>
    </View>
  );

  const hasPenaltyInquiries = inquiries?.some(
    (item) => item.inquiryType === ReadInqText.penalty
  );

  const filteredInquiries =
    selectedInquiryType === all
      ? inquiries
      : inquiries?.filter((item) => item.inquiryType === selectedInquiryType);

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <Text style={styles.filterLabel}>
          {ReadInqText.filterByInquiryType}
        </Text>
        <Picker
          selectedValue={selectedInquiryType}
          onValueChange={(itemValue) => setSelectedInquiryType(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label={AllLabel} value={all} />
          <Picker.Item
            label={ReadInqText.penalty}
            value={ReadInqText.penalty}
          />
          <Picker.Item label={Other} value={ReadInqText.inquiry} />
        </Picker>
      </View>
      <View style={styles.header}>
        <Text style={[styles.headerText, styles.inquiryType]}>
          {ReadInqText.inquiryType}
        </Text>
        <Text style={[styles.headerText, styles.description]}>
          {ReadInqText.description}
        </Text>
        <Text style={[styles.headerText, styles.userName]}>
          {ReadInqText.userName}
        </Text>
        {hasPenaltyInquiries && (
          <Text style={[styles.headerText, styles.penaltyAmount]}>
            {ReadInqText.penaltyAmount}
          </Text>
        )}
        <Text style={[styles.headerText, styles.createdAt]}>Created On</Text>
      </View>
      <FlatList
        data={filteredInquiries}
        renderItem={renderInquiryItem}
        keyExtractor={(item) => item._id}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  filterLabel: {
    marginRight: 8,
  },
  picker: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 8,
    backgroundColor: "#fff",
  },
  headerText: {
    flex: 1,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 8,
  },
  inquiryType: {
    textAlign: "left",
    flex: 2,
  },
  description: {
    textAlign: "left",
    flex: 3,
  },
  userName: {
    textAlign: "left",
    flex: 2,
  },
  penaltyAmount: {
    textAlign: "right",
    flex: 2,
    color: "#f00",
    fontWeight: "bold",
  },
  createdAt: {
    textAlign: "right",
    flex: 2,
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 8,
    backgroundColor: "#fff",
  },
  cell: {
    flex: 1,
    textAlign: "center",
    paddingVertical: 8,
  },
  contentContainer: {
    flexGrow: 1,
  },
});
