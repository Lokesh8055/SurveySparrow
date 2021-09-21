import React from "react";
import format from "date-fns/format";

function Message({ message, showTimeStamp }) {
  return (
    <div className={`${message.sender}`}>
      <div className="message-text">
        {showTimeStamp && (
          <span className="timestamp">
            {format(message.timestamp, "hh:mm")}
          </span>
        )}
        <p>{message.text}</p>
      </div>
    </div>
  );
}

export default Message;
