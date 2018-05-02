const mongoose = require("mongoose");
const Course = mongoose.model("Course");
const Venue = mongoose.model("Venue");

const getCourses = async (req, res) => {
  try {
    const courses = await Course.find({});
    return res.send(courses);
  } catch (error) {
    return res.status(error.status || 401).send(error.message);
  }
};

const getVenues = async (req, res) => {
  try {
    const venues = await Venue.find({});
    return res.send(venues);
  } catch (error) {
    return res.status(error.status || 401).send(error.message);
  }
};

const createCourse = async (req, res) => {
  try {
    const { code, title } = req.body;
    if (!code || !title) {
      return res.status(401).send("all fields required");
    }

    const course = await Course.create({ code, title });
    return res.json(course);
  } catch (error) {
    return res.status(error.status || 401).send(error.message);
  }
};

const createVenue = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send("name required");
    }

    const venue = await Venue.create({ name });
    return res.json(venue);
  } catch (error) {
    return res.status(error.status || 401).send(error.message);
  }
};

const findCourse = async (req, res, next, id) => {
  try {
    req.course = await Course.findById(id);

    if (!req.course) {
      return res.status(401).send("Course not found");
    }

    return next();
  } catch (error) {
    return res.status(error.status || 401).send(error.message);
  }
};

const updateCourse = async (req, res) => {
  try {
    const { venue, time } = req.body.target;
    if (!venue || !time) {
      return res.status(401).send("all fields required");
    }

    const existingVenue = await Venue.findById(venue);
    if (!existingVenue) {
      return res.status(401).send("venue not found");
    }

    req.course.period = {
      venue,
      time
    };

    const updatedCourse = await req.course.save();
    res.send(updatedCourse);
  } catch (error) {
    return res.status(error.status || 401).send(error.message);
  }
};

const removeCourse = async (req, res) => {
  try {
    await req.course.remove();
    return res.status(201).send("success");
  } catch (error) {
    return res.status(error.status || 401).send(error.message);
  }
};

module.exports = app => {
  app.param("courseId", findCourse);
  app.get("/course", getCourses);
  app.post("/course", createCourse);
  app.put("/course/:courseId", updateCourse);
  app.delete("/course/:courseId", removeCourse);
  app.get("/venue", getVenues);
  app.post("/venue", createVenue);
};
