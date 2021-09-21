import React, { useRef } from "react";
import { MESSAGE_SENDER } from "utils/constants";
import format from "date-fns/format";
import Loader from "./components/Loader";
import { useMessageContext } from "context/message/messageContext";
import Sparrow from "./components/Sparrow";

const Messages = ({ showTimeStamp, typing }) => {
  const { messages, loading, error } = useMessageContext();
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
      <Sparrow />
      {loading && <Loader typing={typing} />}
      {error && <section>{error}</section>}
    </div>
  );
};

export default Messages;
