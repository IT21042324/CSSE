import moment from "moment-timezone";

export const findObjectLength = (object) => {
  return Object.keys(object).length;
};

export const calculateJourneyFare = (ticketAmount, distance) => {
  let distanceValue = parseFloat(distance);

  const totAmount = (ticketAmount * distanceValue)?.toFixed(2);

  return `Rs. ${totAmount}`;
};

export const calculateRequiredCredits = (creditsPerKm, distance) => {
  let distanceValue = parseFloat(distance);

  return (creditsPerKm * distanceValue)?.toFixed(2);
};

export const convertStringToJson = (str) => {
  return JSON.parse(str);
};

export const currTime = moment().local().format("HH:mm");
export const currDate = moment().local().format("Do MMM YY");

export const getDateFromCheckInDate = (checkInDate) => {
  const date = moment(checkInDate);
  const sriLankaDate = date.tz("Asia/Colombo");
  const formattedDate = sriLankaDate.format("Do MMM");
  return formattedDate;
};

export const getTimeFronCheckinDate = (checkInDate) => {
  const time = moment(checkInDate);
  const sriLankaTime = time.tz("Asia/Colombo");
  const formattedTime = sriLankaTime.format("HH:mm");
  return formattedTime;
};

export const checkIfScannedQrIsValid = (qrDataAsJson) => {
  return checkIfQrIsValid(qrDataAsJson);
};

const checkIfQrIsValid = (qrDataAsJson) => {
  const availableCredits = parseFloat(qrDataAsJson.availableCredits);

  if (
    qrDataAsJson._id &&
    qrDataAsJson.userID &&
    qrDataAsJson.checkinTime &&
    qrDataAsJson.checkInDate &&
    qrDataAsJson.busRoute &&
    qrDataAsJson.startingPoint &&
    !qrDataAsJson.checkoutTime &&
    !qrDataAsJson.checkoutDate &&
    !qrDataAsJson.endingPoint &&
    availableCredits > 0
  )
    return true;
  else return false;
};
