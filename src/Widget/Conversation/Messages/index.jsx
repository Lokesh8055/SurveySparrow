import React, { useRef, useEffect } from "react";
import { MESSAGE_SENDER } from "../../../utils/constants";
import format from "date-fns/format";
import Loader from "./components/Loader";
import { useMessageContext } from "../../../context/message/messageContext";
import Sparrow from "../../../assets/sparrow favicon.png";

const Messages = ({ showTimeStamp, typing, showChat }) => {
  const { messages, loading } = useMessageContext();
  const messageRef = useRef(null);

  const isClient = (sender) => sender === MESSAGE_SENDER.CLIENT;

  const getComponentToRender = (message) => {
    const ComponentToRender = message.component;
    if (message.type === "component") {
      return <ComponentToRender {...message.props} />;
    }
    return (
      <ComponentToRender message={message} showTimeStamp={showTimeStamp} />
    );
  };
  return (
    <div id="messages" className="messages-container" ref={messageRef}>
      {messages?.map((message, index) => (
        <div
          className={`message ${
            isClient(message.sender) ? "message-client" : ""
          }`}
          key={`${index}-${format(message.timestamp, "hh:mm")}`}
        >
          {getComponentToRender(message)}
        </div>
      ))}
      <div className="sparrow">
        <img src={Sparrow} alt="sparrow" />
        <p>We run on surveysparrow</p>
      </div>
      {loading && <Loader typing={typing} />}
    </div>
  );
};

export default Messages;
