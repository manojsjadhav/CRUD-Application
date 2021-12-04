import {
  GET_DETAILS,
  POST_DETAILS,
  UPDATE_DETAILS,
  DELETE_DETAILS,
} from "../Type";

const initialState = {
  details: [],
  detailsById: [],
  isRespons: false,
  isUpdateRespons: false,
  isDeleteRespons: false,
};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAILS:
      return {
        details: action.payload,
      };
    case POST_DETAILS:
      return {
        isRespons: action.payload,
      };
    case UPDATE_DETAILS:
      return {
        isUpdateRespons: action.payload,
      };
    case DELETE_DETAILS:
      return {
        isDeleteRespons: action.payload,
      };
    default:
      return state;
  }
};
export default Reducer;
