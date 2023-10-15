import { useContext } from "react";
import { UserContext } from "../context/user";

export const UseUserContext = () => {
  const { dispatch, user } = useContext(UserContext);

  function setUser(user) {
    dispatch({
      type: "SetUser",
      payload: user,
    });
  }

  return {
    dispatch,
    user,
    setUser,
  };
};
