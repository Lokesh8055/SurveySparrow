import React, { useRef, useState, useEffect } from "react";
import send from "assets/send_button.svg";
import cn from "classnames";
import { useMessageContext } from "context/message/messageContext";
import {
  insertNodeAtCaret,
  getCaretIndex,
  updateCaret,
  isFirefox,
} from "utils/editable";

function Sender({
  sendMessage,
  disabledInput,
  autofocus,
  buttonAlt,
  onChangeSize,
}) {
  const brRegex = /<br>/g;
  const inputRef = useRef(null);
  const { showChat } = useMessageContext();
  const refContainer = useRef(null);
  const [enter, setEnter] = useState(false);
  const [firefox, setFirefox] = useState(false);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (showChat && autofocus) inputRef.current?.focus();
  }, [showChat, autofocus]);

  useEffect(() => {
    setFirefox(isFirefox());
  }, []);

  const onTextInputChange = (event) => {};

  const handleChange = (event) => {
    onTextInputChange && onTextInputChange(event);
  };

  const handlerSendMessage = () => {
    const el = inputRef.current;
    if (el.innerHTML) {
      sendMessage(el.innerText);
      el.innerHTML = "";
    }
  };

  const handlerOnKeyPress = (event) => {
    const el = inputRef.current;

    if (event.charCode === 13 && !event.shiftKey) {
      event.preventDefault();
      handlerSendMessage();
    }
    if (event.charCode === 13 && event.shiftKey) {
      event.preventDefault();
      insertNodeAtCaret(el);
      setEnter(true);
    }
  };

  // TODO use a context for checkSize and toggle picker
  const checkSize = () => {
    const senderEl = refContainer.current;
    if (senderEl && height !== senderEl.clientHeight) {
      const { clientHeight } = senderEl;
      setHeight(clientHeight);
      onChangeSize(clientHeight ? clientHeight - 1 : 0);
    }
  };

  const handlerOnKeyUp = (event) => {
    const el = inputRef.current;
    if (!el) return true;
    // Conditions need for firefox
    if (firefox && event.key === "Backspace") {
      if (el.innerHTML.length === 1 && enter) {
        el.innerHTML = "";
        setEnter(false);
      } else if (brRegex.test(el.innerHTML)) {
        el.innerHTML = el.innerHTML.replace(brRegex, "");
      }
    }
    checkSize();
  };

  const handlerOnKeyDown = (event) => {
    const el = inputRef.current;

    if (event.key === "Backspace" && el) {
      const caretPosition = getCaretIndex(inputRef.current);
      const character = el.innerHTML.charAt(caretPosition - 1);
      if (character === "\n") {
        event.preventDefault();
        event.stopPropagation();
        el.innerHTML =
          el.innerHTML.substring(0, caretPosition - 1) +
          el.innerHTML.substring(caretPosition);
        updateCaret(el, caretPosition, -1);
      }
    }
  };

  return (
    <div ref={refContainer} className="sender">
      <div
        className={cn("new-message", {
          "message-disable": disabledInput,
        })}
      >
        <div
          spellCheck
          type="text"
          className="input"
          contentEditable={!disabledInput}
          ref={inputRef}
          placeholder="Write a reply"
          onInput={handleChange}
          onKeyPress={handlerOnKeyPress}
          onKeyUp={handlerOnKeyUp}
          onKeyDown={handlerOnKeyDown}
        />
      </div>
      <button type="submit" className="send" onClick={handlerSendMessage}>
        <img src={send} className="send-icon" alt={buttonAlt} />
      </button>
    </div>
  );
}

export default Sender;
