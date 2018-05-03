import axios from "axios";
import * as ActionTypes from "./types";

export const moveCourseToCell = payload => async dispatch => {
  try {
    await axios.put(`/course/${payload.course.id}`, {
      target: payload.target
    });

    const courses = await axios.get("/course");
    dispatch({
      type: ActionTypes.FETCH_COURSES,
      payload: courses.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const moveCourseToUnassigned = payload => async dispatch => {
  try {
    await axios.get(`/course/${payload.course.id}/unassign`);

    const courses = await axios.get("/course");
    dispatch({
      type: ActionTypes.FETCH_COURSES,
      payload: courses.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const removeCourse = payload => async dispatch => {
  try {
    await axios.delete(`/course/${payload.course.id}`);

    const courses = await axios.get("/course");
    dispatch({
      type: ActionTypes.FETCH_COURSES,
      payload: courses.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchData = () => async dispatch => {
  try {
    const venues = await axios.get("/venue");
    dispatch({
      type: ActionTypes.FETCH_VENUES,
      payload: venues.data
    });

    const courses = await axios.get("/course");
    dispatch({
      type: ActionTypes.FETCH_COURSES,
      payload: courses.data
    });
  } catch (error) {
    console.log(error);
  }
};
