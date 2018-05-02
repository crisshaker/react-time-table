import * as ActionTypes from "./types";

export const moveCourseToCell = payload => {
  return {
    type: ActionTypes.MOVE_COURSE_TO_CELL,
    payload
  };
};

export const moveCourseToUnassigned = payload => {
  return {
    type: ActionTypes.MOVE_COURSE_TO_UNASSIGNED,
    payload
  };
};

export const removeCourse = payload => {
  return {
    type: ActionTypes.REMOVE_COURSE,
    payload
  };
};
