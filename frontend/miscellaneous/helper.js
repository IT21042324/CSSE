export const findObjectLength = (object) => {
  return Object.keys(object).length;
};

export const calculateJourneyFare = (ticketAmount, distance) => {
  let distanceValue = parseFloat(distance);

  // ticketAmount is the amount per km.
  return `Rs. ${ticketAmount * distanceValue}`;
};

export const calculateRequiredCredits = (creditsPerKm, distance) => {
  let distanceValue = parseFloat(distance);

  return creditsPerKm * distanceValue;
};
