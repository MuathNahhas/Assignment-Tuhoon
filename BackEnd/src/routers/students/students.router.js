const express = require("express");
const studentRouter = express.Router();
const {
  getAllInstructors,
  getStudentById,
  getAllStudent,
  addNewStudent,
} = require("./students.controller");
studentRouter.get("/AllInstructors", getAllInstructors);
studentRouter.get("/AllStudent", getAllStudent);
studentRouter.get("/studentById/:studentId", getStudentById);
studentRouter.post("/addStudent", addNewStudent);

module.exports = studentRouter;
