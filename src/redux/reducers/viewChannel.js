import { VIEW_CHANNEL } from "../actions/actionTypes";
import { CLEAR_MESSAGES } from "./../actions/actionTypes";

const initialState = [];

const channelViewReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIEW_CHANNEL:
      return [...state, ...action.payload];
    case CLEAR_MESSAGES:
      return [];
    default:
      return state;
  }
};
export default channelViewReducer;
