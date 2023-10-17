import React, { createContext, useReducer } from "react";

export const LocationSettingsContext = createContext();

export const LocationSettingsContextProvider = (props) => {
  const [locations, dispatch] = useReducer(reducer, {
    startingLocation: {},
    endingLocation: {},
  });

  function reducer(state, action) {
    switch (action.type) {
      case "SetLocation":
        return action.payload;

      case "ClearLocation":
        return { startingLocation: {}, endingLocaion: {} };

      default:
        return state;
    }
  }

  return (
    <LocationSettingsContext.Provider value={{ locations, dispatch }}>
      {props.children}
    </LocationSettingsContext.Provider>
  );
};
