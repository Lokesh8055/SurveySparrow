import { css } from "styled-components";

const messagebubble = ({ bgcolor, color }) => css`
  background-color: ${bgcolor};
  color: ${color};
  border-radius: 10px;
  max-width: 215px;
  padding: 15px;
  text-align: left;
`;

// Full screen mixins

const widgetcontainerfs = css`
  height: 100vh;
  margin: 0;
  max-width: none;
  width: 100%;
`;

const headerfs = css`
  border-radius: 0;
  flex-shrink: 0;
  position: relative;
`;

const titlefs = css`
  padding: 0 0 15px 0;
`;

const closebuttonfs = css`
  background-color: var(--turqois-1);
  border: 0;
  display: block;
  position: absolute;
  right: 10px;
  top: 20px;
  width: 20px;
`;

const closefs = css`
  width: 20px;
  height: 20px;
`;

const messagescontainerfs = css`
  height: 100%;
  max-height: none;
`;

const conversationcontainerfs = css`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const launcherfs = css`
  bottom: 0;
  margin: 20px;
  position: fixed;
  right: 0;
`;

export {
  messagebubble,
  widgetcontainerfs,
  launcherfs,
  conversationcontainerfs,
  messagescontainerfs,
  closebuttonfs,
  closefs,
  titlefs,
  headerfs,
};
