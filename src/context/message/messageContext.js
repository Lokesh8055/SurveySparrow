import axios from "axios";
import React, { useContext, useReducer } from "react";
import {
  ADD_NEW_RESPONSE_MESSAGE,
  ADD_NEW_USER_MESSAGE,
  PENDING_USER_MESSAGE,
  FULFILLED_RESPONSE_MESSAGE,
  REJECTED_RESPONSE_MESSAGE,
} from "../types";
import reducer from "./messageReducer";

const MessageContext = React.createContext();

export const MessageProvider = ({ children }) => {
  const initialState = {
    messages: [],
    messageResponse: {},
    loading: false,
    error: null,
    badgeCount: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const getUserMessage = async () => {
    try {
      dispatch({ type: PENDING_USER_MESSAGE });
      const res = await axios.get("https://api.adviceslip.com/advice");
      const data = res.data;
      dispatch({ type: FULFILLED_RESPONSE_MESSAGE, payload: data });
    } catch (err) {
      dispatch({ type: REJECTED_RESPONSE_MESSAGE, payload: err });
    }
  };

  const addUserMessage = (text) => {
    dispatch({ type: ADD_NEW_USER_MESSAGE, payload: { text } });
  };

  const addResponseMessage = (text) => {
    dispatch({ type: ADD_NEW_RESPONSE_MESSAGE, payload: { text } });
  };

  return (
    <MessageContext.Provider
      value={{
        messages: state.messages,
        badgeCount: state.badgeCount,
        messageResponse: state.messageResponse,
        loading: state.loading,
        error: state.error,
        getUserMessage,
        addUserMessage,
        addResponseMessage,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export const useMessageContext = () => {
  return useContext(MessageContext);
};
