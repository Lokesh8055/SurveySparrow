import React, { useState, useContext } from "react";

const GlobalStateContext = React.createContext();

export const GlobalStateProvider = ({ children }) => {
  const [subtitle, setSubtitle] = useState(
    "The team typically replies in a few minutes"
  );
  const [show, setShow] = useState(false);

  return (
    <GlobalStateContext.Provider
      value={{
        subtitle,
        setSubtitle,
        show,
        setShow,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalStateContext = () => {
  return useContext(GlobalStateContext);
};
