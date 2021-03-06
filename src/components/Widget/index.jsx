import React, { useEffect, useRef } from "react";
import { useFullScreenContext } from "context/fullScreen/fullScreenContext";
import cn from "classnames";
import Conversation from "./Conversation";
import Launcher from "./Launcher";
import { useBehaviourContext } from "context/behaviourContext";
import { useMessageContext } from "context/message/messageContext";
import WidgetContainer from "./Widget.style";

const Widget = () => {
  const {
    showChat,
    disabledInput,
    messageLoader: typing,
    toggleChat,
    toggleMsgLoader,
  } = useBehaviourContext();
  const { openFullscreenPreview, visible } = useFullScreenContext();
  const {
    addUserMessage,
    addResponseMessage,
    messageResponse,
    getUserMessage,
  } = useMessageContext();

  const messageRef = useRef(null);
  const imagePreview = false;
  const chatId = "chat-container";
  const launcherOpenLabel = "Open chat";
  const launcherCloseLabel = "Close chat";
  const sendButtonAlt = "Send";
  const fullScreenMode = false;
  const showTimeStamp = true;
  const showCloseButton = true;

  useEffect(() => {
    addUserMessage(
      "Is there any offline versions available for maxeon prayer?"
    );
    addResponseMessage("Currently we don't have but we will launch soon");
    getUserMessage();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (showChat) {
      messageRef.current = document.getElementById("messages");
    }
    return () => {
      messageRef.current = null;
    };
  }, [showChat]);

  useEffect(() => {
    const target = messageRef?.current;
    if (imagePreview && showChat) {
      target?.addEventListener("click", eventHandle, false);
    }

    return () => {
      target?.removeEventListener("click", eventHandle);
    };
    //eslint-disable-next-line
  }, [imagePreview, showChat]);

  useEffect(() => {
    document.body.setAttribute(
      "style",
      `overflow: ${visible || fullScreenMode ? "hidden" : "auto"}`
    );
  }, [fullScreenMode, visible]);

  const handleNewUserMessage = (newMessage) => {
    toggleMsgLoader();
    setTimeout(() => {
      toggleMsgLoader();
      addResponseMessage(newMessage);
    }, 2000);
  };

  const handleSubmit = (msgText) => {
    if (msgText.length < 10) {
      addUserMessage("Uh oh, please write a bit more.");
      return false;
    }
    return true;
  };

  const handleMessageSubmit = (userInput) => {
    if (!userInput.trim()) {
      return;
    }
    handleSubmit?.(userInput);
    addUserMessage(userInput);
    getUserMessage();
    handleNewUserMessage(messageResponse?.slip?.advice);
  };

  const eventHandle = (evt) => {
    if (evt.target && evt.target.className === "message-img") {
      const { src, alt, naturalWidth, naturalHeight } = evt.target;
      const obj = {
        src: src,
        alt: alt,
        width: naturalWidth,
        height: naturalHeight,
      };
      openFullscreenPreview(obj);
    }
  };

  const toggleConversation = () => {
    toggleChat();
  };

  return (
    <WidgetContainer>
      <div
        className={cn("widget-container", {
          "full-screen": fullScreenMode,
          "previewer-screen": imagePreview,
          "close-widget-container ": !showChat,
        })}
      >
        {showChat && (
          <Conversation
            disabledInput={disabledInput}
            autofocus={true}
            showChat={showChat}
            sendButtonAlt={sendButtonAlt}
            showTimeStamp={showTimeStamp}
            handleMessageSubmit={handleMessageSubmit}
            typing={typing}
            showCloseButton={showCloseButton}
            toggle={toggleConversation}
          />
        )}

        <Launcher
          toggle={toggleConversation}
          chatId={chatId}
          openLabel={launcherOpenLabel}
          closeLabel={launcherCloseLabel}
          showChat={showChat}
        />
      </div>
    </WidgetContainer>
  );
};

export default Widget;
