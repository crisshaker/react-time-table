import * as ActionTypes from "../actions/types";

const INITIAL_STATE = [
  {
    code: "CSIT123",
    id: 0,
    period: {
      venue: "JQB11",
      time: "730"
    }
  },
  {
    code: "CSIT562",
    id: 1,
    period: {
      venue: "JQB23",
      time: "730"
    }
  },
  {
    code: "CSIT123",
    id: 2,
    period: {
      venue: "NNB2",
      time: "1230"
    }
  },
  {
    code: "CSIT202",
    id: 3,
    period: null
  }
];

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ActionTypes.MOVE_COURSE_TO_CELL:
      return state.map(course => {
        if (course.id === payload.course.id) {
          return {
            ...course,
            period: {
              time: payload.target.time,
              venue: payload.target.venue.name
            }
          };
        }

        return course;
      });
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
