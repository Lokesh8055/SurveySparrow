import { CLOSE_FULLSCREEN_PREVIEW, OPEN_FULLSCREEN_PREVIEW } from "../types";

const fullScreenReducer = (state, action) => {
  switch (action.type) {
    case OPEN_FULLSCREEN_PREVIEW:
      const { src, width, height } = action.payload;
      return { ...state, src, width, height, visible: true };
    case CLOSE_FULLSCREEN_PREVIEW:
      return { ...state };
    default:
      return state;
  }
};

export default fullScreenReducer;
