import * as ActionTypes from "../actions/types";

export default (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_VENUES:
      return payload;
    default:
      return state;
  }
};
