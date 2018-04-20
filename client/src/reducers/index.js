import { combineReducers } from "redux";

import coursesReducer from "./coursesReducer";
import venuesReducer from "./venuesReducer";

export default combineReducers({
  courses: coursesReducer,
  venues: venuesReducer
});
