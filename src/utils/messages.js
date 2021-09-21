import Message from "../components/Widget/Conversation/Messages/components/Message";
import { MESSAGES_TYPES } from "./constants";
import { v4 as uuidv4 } from "uuid";
function createNewMessage(text = "", sender) {
  return {
    type: MESSAGES_TYPES.TEXT,
    component: Message,
    text,
    sender,
    timestamp: new Date(),
    showAvatar: true,
    id: uuidv4(),
  };
}

export default createNewMessage;
