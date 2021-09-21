import {
  ADD_NEW_RESPONSE_MESSAGE,
  ADD_NEW_USER_MESSAGE,
  PENDING_USER_MESSAGE,
  FULFILLED_RESPONSE_MESSAGE,
  REJECTED_RESPONSE_MESSAGE,
} from "../types";
import createNewMessage from "../../utils/messages";
import { MESSAGE_SENDER } from "../../utils/constants";

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case PENDING_USER_MESSAGE:
      return {
        ...state,
        loading: true,
      };
    case FULFILLED_RESPONSE_MESSAGE:
      return {
        ...state,
        messageResponse: action.payload,
        loading: false,
      };
    case REJECTED_RESPONSE_MESSAGE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ADD_NEW_USER_MESSAGE:
      const { text: clientText } = action.payload;
      return {
        ...state,
        messages: [
          ...state.messages,
          createNewMessage(clientText, MESSAGE_SENDER.CLIENT),
        ],
      };
    case ADD_NEW_RESPONSE_MESSAGE:
      const { text: receiverText } = action.payload;
      return {
        ...state,
        messages: [
          ...state.messages,
          createNewMessage(receiverText, MESSAGE_SENDER.RESPONSE),
        ],
      };
    default:
      return state;
  }
};

export default messageReducer;
