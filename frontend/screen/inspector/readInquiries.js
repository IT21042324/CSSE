import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { MakeApiCall } from "../../api/apiCalls";
import { getDateFromCheckInDate } from "../../miscellaneous/helper";
import { Picker } from "@react-native-picker/picker";
import { ReadInqText } from "../../contants/strings";
import { styles } from "../../styles/readInqueries";

const all = "all";
const AllLabel = "All";
const Other = "Other";
export const ReadInquiries = () => {
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
