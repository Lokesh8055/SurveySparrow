import React from "react";
import { MessageProvider } from "./context/message/messageContext";
import { FullScreenProvider } from "./context/fullScreen/fullScreenContext";
import { BehaviourProvider } from "./context/behaviourContext";
import { GlobalStateProvider } from "./context/globalStateContext";

const Provider = ({ children }) => {
  return (
    <GlobalStateProvider>
      <MessageProvider>
        <FullScreenProvider>
          <BehaviourProvider>{children}</BehaviourProvider>
        </FullScreenProvider>
      </MessageProvider>
    </GlobalStateProvider>
  );
};

export default Provider;
