import React from "react";
import cn from "classnames";
import openImg from "assets/Sparrow Bird.png";
import closeImg from "assets/close.svg";

function Launcher({ toggle, chatId, openLabel, closeLabel, showChat }) {
  const toggleChat = () => {
    toggle();
  };
  return (
    <button
      type="button"
      className={cn("launcher", { "hide-sm": showChat })}
      onClick={toggleChat}
      aria-controls={chatId}
    >
      {showChat ? (
        <img src={closeImg} className="close-launcher" alt={openLabel} />
      ) : (
        <img src={openImg} className="open-launcher" alt={closeLabel} />
      )}
    </button>
  );
}

export default Launcher;
