import { css } from "styled-components";
import { bounce } from "style/animation";
import {
  headerfs,
  titlefs,
  closebuttonfs,
  closefs,
  messagescontainerfs,
  messagebubble,
} from "style/common";

const Header = css`
  .header {
    background-color: var(--clr-primary);
    border-radius: 20px;
    color: var(--clr-white);
    display: flex;
    flex-direction: column;
    padding: 30px;
    margin: 1rem;
  }

  .subtitle {
    font-size: 1.5rem;
  }

  .title {
    font-size: 24px;
    margin: 0;
    padding: 15px 0;
  }

  .close-button {
    ${closebuttonfs}
  }

  .full-screen {
    .header {
      ${headerfs};
    }

    .title {
      ${titlefs}
    }

    .close {
      ${closefs}
    }
  }

  @media screen and(max-width: 800px) {
    .header {
      ${headerfs};
    }

    .title {
      ${titlefs}
    }

    .close {
      ${closefs}
    }
  }
`;

const Body = css`
  .body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: var(--clr-black);
    padding: 20px 0 25px 25px;

    & > * {
      margin-bottom: 1rem;
    }

    button {
      display: inline-block;
      color: var(--clr-white);
      background: var(--clr-button);
      padding: 0.8rem 1.5rem;
      border: none;
      border-radius: 25px;
      text-align: center;
      text-decoration: none;
    }
  }
`;

const Message = css`
  .message {
    margin: 10px;
    display: flex;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  .message-client {
    flex-direction: row-reverse;
  }

  .timestamp {
    font-size: 10px;
    margin-top: 5px;
  }

  .client {
    display: flex;
    flex-direction: column;
    margin-left: auto;

    .message-text {
      clip-path: polygon(
        0% 0%,
        100% 0%,
        100% 83%,
        100% 100%,
        79% 83%,
        50% 83%,
        0 83%
      );
      ${messagebubble({
        bgcolor: "var(--clr-secondary)",
        color: "var(--clr-white)",
      })}

      white-space: pre-wrap;
      word-wrap: break-word;
    }

    .timestamp {
      align-self: flex-end;
    }
  }

  .response {
    display: flex;
    align-items: center;

    &::before {
      content: "";
      clip-path: circle(50% at 50% 50%);
      width: 30px;
      height: 30px;
      background-color: var(--clr-secondary);
      margin-right: 1rem;
    }

    .message-text {
      clip-path: polygon(
        0% 0%,
        100% 0%,
        100% 83%,
        74% 83%,
        12% 83%,
        0 100%,
        0 83%
      );
      ${messagebubble({
        bgcolor: "var(--clr-text)",
        color: "var(--clr-black)",
      })}
    }
  }

  .message-text {
    p {
      margin: 0;
    }

    img {
      width: 100%;
      object-fit: contain;
    }
  }

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    margin-right: 10px;

    &-client {
      margin: 0 0 0 10px;
    }
  }
`;

const Loader = css`
  //LOADER

  .loader {
    margin: 10px;
    display: none;

    &.active {
      display: flex;
    }
  }

  .loader-container {
    background-color: var(--grey-2);
    border-radius: 10px;
    padding: 15px;
    max-width: 215px;
    text-align: left;
  }

  .loader-dots {
    display: inline-block;
    height: 4px;
    width: 4px;
    border-radius: 50%;
    background: var(--grey-0);
    margin-right: 2px;
    animation: ${bounce} 0.5s ease infinite alternate;

    &:nth-child(1) {
      animation-delay: 0.2s;
    }

    &:nth-child(2) {
      animation-delay: 0.3s;
    }

    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`;

const MessagesContainer = css`
  .messages-container {
    background-color: var(--clr-white);
    height: 50vh;
    max-height: 410px;
    overflow-y: scroll;
    padding-top: 10px;
    border-bottom: 2px solid var(--clr-text);
    -webkit-overflow-scrolling: touch;
  }

  .full-screen {
    .messages-container {
      ${messagescontainerfs}
    }
  }

  @media screen and (max-width: 800px) {
    .messages-container {
      ${messagescontainerfs}
    }
  }

  //MESSAGE
  ${Message}

  //LOADER
  ${Loader}
`;

const Sender = css`
  .sender {
    align-items: flex-end;
    background-color: var(--grey-2);
    border-radius: 0 0 10px 10px;
    display: flex;
    justify-content: space-between;
    height: max-content;
    max-height: 95px;
    min-height: 45px;
    overflow: hidden;
    padding: 10px;
    position: relative;

    &.expand {
      height: 55px;
    }
  }

  .new-message {
    background-color: var(--clr-white);
    border: 0;
    border-radius: 5px;
    padding: 10px 5px;
    resize: none;
    width: calc(100% - 45px);

    &:focus {
      outline: none;
    }

    &.expand {
      height: 40px;
    }
  }

  .input {
    display: block;
    height: 100%;
    line-height: 20px;
    max-height: 78px;
    overflow-y: auto;
    user-select: text;
    white-space: pre-wrap;
    word-wrap: break-word;
    color: var(--clr-black);

    &:focus-visible {
      outline: none;
    }

    &[placeholder]:empty::before {
      content: attr(placeholder);
      color: var(--grey-0);
    }
  }

  .send {
    background: var(--grey-2);
    border: 0;
    cursor: pointer;

    .send-icon {
      height: 25px;
    }
  }

  .message-disable {
    background-color: var(--grey-2);
    cursor: not-allowed;
  }

  @media screen and (max-width: 800px) {
    .sender {
      border-radius: 0;
      flex-shrink: 0;
    }
  }
`;

const Sparrow = css`
  .sparrow {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;

    & > * {
      margin-right: 1rem;
    }

    p {
      color: var(--clr-black);
    }
  }
`;

const ConversationContainer = css`
  background-color: var(--clr-white);
  border-radius: 10px;
  min-width: 370px;
  max-width: 90vw;
  position: relative;

  &.active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  &.hidden {
    z-index: -1;
    pointer-events: none;
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
  //HEADER
  ${Header}
  //BODY
  ${Body}
  //MESSAGES
  ${MessagesContainer}
  //SPARROW ICON
  ${Sparrow}
  //SENDER
  ${Sender}
`;

export default ConversationContainer;
