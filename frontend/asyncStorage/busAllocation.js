import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeSeatData = async (value) => {
  try {
    const newDate = new Date(value.checkInDate);
    console.log(newDate);

    const allKeys = await getAllKeys();

    const hasPreviousDate = await checkPreviousDate(allKeys, newDate);

    if (hasPreviousDate) {
      await clearSeatAllocations();
    }

    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(value.seatNo?.toString(), jsonValue);
  } catch (e) {
    console.error("Data storing error");
  }
};

export const getSeatData = async (seatNo) => {
  try {
    const jsonValue = await AsyncStorage.getItem(seatNo?.toString());
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error("Data retreiving error");
  }
};

export const getMultiple = async () => {
  const allKeys = await getAllKeys();

  let values;

  try {
    values = await AsyncStorage.multiGet(allKeys);
  } catch (e) {
    console.error(e);

    console.error("Mutliple data retreiving error");
  }
  console.log(values);
  return values;
};

const getAllKeys = async () => {
  let keys = [];
  try {
    keys = await AsyncStorage.getAllKeys();
  } catch (e) {
    console.error(e);

    console.error("Mutliple keys retreiving error");
  }

  console.log(keys);
  return keys;
};

export const mergeData = async (dataToMerge) => {
  try {
    await AsyncStorage.mergeItem(
      dataToMerge.seatNo.toString(),
      JSON.stringify(dataToMerge)
    );
  } catch (err) {
    console.error(e);

    console.error("Problem with merging data");
  }
};

export const clearSeatAllocations = async () => {
  const keys = await getAllKeys();

  try {
    await AsyncStorage.multiRemove(keys);
  } catch (e) {
    console.error(e);
    console.error("Error trying too remove data");
  }

  console.log("Done");
};

// A helper function to check if any of the existing keys has a previous checkInDate than the new one
const checkPreviousDate = async (keys, newDate) => {
  // Loop through the keys
  for (let key of keys) {
    // Get the value for each key
    const value = await getSeatData(key);

    // Get the checkInDate for each value
    const oldDate = new Date(value.checkInDate);

    // Compare the dates
    if (oldDate < newDate) {
      // Return true if any previous date is found
      return true;
    }
  }

  // Return false if no previous date is found
  return false;
};
