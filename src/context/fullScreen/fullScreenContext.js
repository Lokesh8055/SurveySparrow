import React, { useContext, useReducer } from "react";
import { CLOSE_FULLSCREEN_PREVIEW, OPEN_FULLSCREEN_PREVIEW } from "../types";
import reducer from "./fullScreenReducer";

const FullScreenContext = React.createContext();

export const FullScreenProvider = ({ children }) => {
  const initialState = {
    src: "",
    alt: "",
    width: 0,
    height: 0,
    visible: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  function openFullscreenPreview(payload) {
    dispatch({
      type: OPEN_FULLSCREEN_PREVIEW,
      payload,
    });
  }

  function closeFullscreenPreview() {
    dispatch({
      type: CLOSE_FULLSCREEN_PREVIEW,
    });
  }

  return (
    <FullScreenContext.Provider
      value={{
        src: state.src,
        alt: state.alt,
        width: state.width,
        height: state.height,
        visible: state.visible,
        openFullscreenPreview,
        closeFullscreenPreview,
      }}
    >
      {children}
    </FullScreenContext.Provider>
  );
};

export const useFullScreenContext = () => {
  return useContext(FullScreenContext);
};
