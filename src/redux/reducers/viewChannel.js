import { VIEW_CHANNEL } from "../actions/actionTypes";

const initialState = [];

const channelViewReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIEW_CHANNEL:
      let channel = action.payload;
      return channel;
    default:
      return state;
  }
};
export default channelViewReducer;
