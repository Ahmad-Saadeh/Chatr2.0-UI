import { VIEW_CHANNEL, ADD_MESSAGE } from "./actionTypes";
import instance from "./instance";

export const viewChannel = channelID => async dispatch => {
  try {
    const res = await instance.get(`channels/${channelID}/`);
    const channel = res.data;
    dispatch({
      type: VIEW_CHANNEL,
      payload: channel
    });
  } catch (error) {
    console.error(error);
  }
};

export const addMessage = (channelID, message) => async dispatch => {
  try {
    const res = await instance.post(`channels/${channelID}/send/`, message);
    const messagedata = res.data;
    const messageDetail = {
      message: messagedata,
      channel: channelID
    };
    dispatch({
      type: ADD_MESSAGE,
      payload: messageDetail
    });
  } catch (error) {
    console.error(error);
  }
};
