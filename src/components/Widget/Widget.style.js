import styled, { css } from "styled-components";
import {
  widgetcontainerfs,
  launcherfs,
  conversationcontainerfs,
} from "style/common";
import ConversationContainer from "./ConversationContainer.style";
import { animation, rotationlr, rotationrl, slidein } from "style/animation";

const Launcher = css`
  .launcher {
    ${animation({ name: slidein, delay: 0, duration: 0.5 })}
    align-self: flex-end;
    background-color: var(--clr-white);
    border: 0;
    border-radius: 50%;
    box-shadow: 0px 2px 10px 1px var(--grey-3);
    height: 60px;
    margin-top: 10px;
    cursor: pointer;
    width: 60px;
    border-bottom-right-radius: 5px;

    img {
      width: 30px;
    }

    &:focus {
      outline: none;
    }
  }

  .open-launcher {
    ${animation({ name: rotationrl, delay: 0, duration: 0.5 })}
  }

  .close-launcher {
    width: 20px;
    ${animation({ name: rotationlr, delay: 0, duration: 0.5 })}
  }

  @media screen and (max-width: 800px) {
    .launcher {
      ${launcherfs}
    }

    .hide-sm {
      display: none;
    }
  }

  .badge {
    position: fixed;
    top: -10px;
    right: -5px;
    background-color: red;
    color: var(--clr-white);
    width: 25px;
    height: 25px;
    text-align: center;
    line-height: 25px;
    border-radius: 50%;
  }
`;

const Conversation = css`
  overflow: hidden;
  border-radius: 10px;

  .conversation-container {
    ${ConversationContainer}
  }

  .conversation-resizer {
    cursor: col-resize;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 5px;
  }

  .full-screen {
    .conversation-container {
      ${conversationcontainerfs}
    }
  }

  @media screen and (max-width: 800px) {
    .conversation-container {
      ${conversationcontainerfs}
    }
  }
`;

const WidgetContainer = styled.div`
  .widget-container {
    bottom: 0;
    display: flex;
    flex-direction: column;
    margin: 0 20px 20px 0;
    position: fixed;
    right: 0;
    z-index: 9999;

    ${Conversation}

    ${Launcher}
  }

  .full-screen {
    ${widgetcontainerfs}
  }

  @media screen and (max-width: 800px) {
    .widget-container {
      height: 100%;
      ${widgetcontainerfs}
    }
  }

  .previewer-screen .message-img {
    cursor: pointer;
  }

  .close-widget-container {
    height: max-content;
    width: max-content;
  }
`;

export default WidgetContainer;
