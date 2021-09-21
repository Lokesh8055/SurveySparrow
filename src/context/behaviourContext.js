import React, { useContext, useReducer } from "react";
import {
  TOGGLE_CHAT,
  TOGGLE_INPUT_DISABLED,
  TOGGLE_MESSAGE_LOADER,
} from "./types";

const BehaviourContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_CHAT:
      return { ...state, showChat: !state.showChat };

    case TOGGLE_INPUT_DISABLED:
      return { ...state, disabledInput: !state.disabledInput };

    case TOGGLE_MESSAGE_LOADER:
      return { ...state, messageLoader: !state.messageLoader };
    default:
      return state;
  }
};

export const BehaviourProvider = ({ children }) => {
  const initialState = {
    showChat: false,
    disabledInput: false,
    messageLoader: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleChat = () => {
    dispatch({
      type: TOGGLE_CHAT,
    });
  };

  const toggleInputDisabled = () => {
    dispatch({
      type: TOGGLE_INPUT_DISABLED,
    });
  };

  const toggleMsgLoader = () => {
    dispatch({
      type: TOGGLE_MESSAGE_LOADER,
    });
  };

  return (
    <BehaviourContext.Provider
      value={{
        showChat: state.showChat,
        disabledInput: state.disabledInput,
        messageLoader: state.messageLoader,
        toggleChat,
        toggleInputDisabled,
        toggleMsgLoader,
      }}
    >
      {children}
    </BehaviourContext.Provider>
  );
};

export const useBehaviourContext = () => {
  return useContext(BehaviourContext);
};
