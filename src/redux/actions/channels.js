import { CHANNELS } from "./actionTypes";
import instance from "./instance";

export const getChannels = () => {
  return async dispatch => {
    try {
      const response = await instance.get("channels/");
      const channels = response.data;
      console.log(channels); // console logs like this that help you debug should be removed before merging into master.
      dispatch({
        type: CHANNELS,
        payload: channels
      });
    } catch (error) {
      console.error(error);
    }
  };
};
