import * as ActionTypes from "../actions/types";

export default (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_COURSES:
      return payload;

    case ActionTypes.MOVE_COURSE_TO_UNASSIGNED:
      return state.map(course => {
        if (course.id === payload.course.id) {
          return {
            ...course,
            period: null
          };
        }

        return course;
      });
    case ActionTypes.REMOVE_COURSE:
      return state.filter(course => course.id !== payload.course.id);
    default:
      return state;
  }
};
