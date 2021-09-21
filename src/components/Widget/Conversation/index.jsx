import React, { useState, useRef, useEffect } from "react";
import Header from "./Header";
import Messages from "./Messages";
import Sender from "./Sender";
import { useMessageContext } from "context/message/messageContext";
import Body from "./Body";
import { useGlobalStateContext } from "context/globalStateContext";

const Conversation = ({
  disabledInput,
  autofocus,
  showChat,
  sendButtonAlt,
  showTimeStamp,
  handleMessageSubmit,
  typing,
  showCloseButton,
}) => {
  const [containerDiv, setContainerDiv] = useState();
  let startX, startWidth;
  const resizable = true;

  const { addResponseMessage, toggleChat } = useMessageContext();

  const { show } = useGlobalStateContext();

  useEffect(() => {
    addResponseMessage("Welcome");
  }, []);

  useEffect(() => {
    const containerDiv = document.getElementById("conversation-container");
    setContainerDiv(containerDiv);
  }, []);

  const [pickerOffset, setOffset] = useState(0);
  const senderRef = useRef(null);
  const [pickerStatus, setPicket] = useState(false);

  const initResize = (e) => {
    if (resizable) {
      startX = e.clientX;
      if (document.defaultView && containerDiv) {
        startWidth = parseInt(
          document.defaultView.getComputedStyle(containerDiv).width
        );
        window.addEventListener("mousemove", resize, false);
        window.addEventListener("mouseup", stopResize, false);
      }
    }
  };

  const resize = (e) => {
    if (containerDiv) {
      containerDiv.style.width = startWidth - e.clientX + startX + "px";
    }
  };

  const stopResize = (e) => {
    window.removeEventListener("mousemove", resize, false);
    window.removeEventListener("mouseup", stopResize, false);
  };

  const handlerSendMsn = (event) => {
    handleMessageSubmit(event);
    if (pickerStatus) setPicket(false);
  };

  const showClassName = showChat ? "active" : "hidden";

  return (
    <div
      id="conversation-container"
      className={`conversation-container ${showClassName}`}
      onMouseDown={initResize}
      aria-live="polite"
    >
      <Header toggleChat={toggleChat} showCloseButton={showCloseButton} />
      {show ? (
        <>
          <Messages showTimeStamp={showTimeStamp} typing={typing} />
          <Sender
            ref={senderRef}
            sendMessage={handlerSendMsn}
            disabledInput={disabledInput}
            autofocus={autofocus}
            buttonAlt={sendButtonAlt}
            onChangeSize={setOffset}
          />
        </>
      ) : (
        <Body />
      )}
    </div>
  );
};

export default Conversation;
