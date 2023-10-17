import { useContext } from "react";
import { LocationSettingsContext } from "../context/locationSettings";

export const UseLocationSettingsContext = () => {
  const { dispatch, locations } = useContext(LocationSettingsContext);

  function setLocationCoordinates(locations) {
    dispatch({
      type: "SetLocation",
      payload: locations,
    });
  }

  return {
    dispatch,
    locations,
    setLocationCoordinates,
  };
};
