import { VIEW_CHANNEL, ADD_MESSAGE } from "../actions/actionTypes";

const initialState = [];

const channelViewReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIEW_CHANNEL:
      let channel = action.payload;
      return channel;
    case ADD_MESSAGE:
      return state; // <-- this isn't doing anything
    default:
      return state;
  }
};
export default channelViewReducer;
