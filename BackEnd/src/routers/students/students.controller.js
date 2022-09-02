const connection = require("../../../db/db");
const getAllInstructors = (req, res) => {
  const getAllInstructorsQuery = "SELECT * from Instructors";
  connection.query(getAllInstructorsQuery, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
    return res.status(200).json({
      success: true,
      message: "get all user successfully",
      result: result,
    });
  });
};
const getStudentById = (req, res) => {
  const studentId = req.params.studentId;
  const data = [studentId];
  const getStudentByIdQuery = "SELECT * from students where id=? ";
  connection.query(getStudentByIdQuery, data, (err, result) => {
    if (result[0] === undefined) {
      return res.status(404).json({
        message: "student id not found,please enter the valid id",
      });
    }
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
    return res.status(200).json({
      success: true,
      message: `data of student have id:${studentId}`,
      result: result,
    });
  });
};
const getAllStudent = (req, res) => {
  const getAllStudentQuery = "SELECT * from students";
  connection.query(getAllStudentQuery, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
    return res.status(200).json({
      success: true,
      message: "All Student",
      result: result,
    });
  });
};
const addNewStudent = (req, res) => {
  const { FirstName, LastName, MAJOR } = req.body;
  const requestInformation = [FirstName, LastName, MAJOR];
  const insertQuery =
    "INSERT INTO students (FirstName,LastName,MAJOR) values(?,?,?)";
  connection.query(insertQuery, requestInformation, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err,
      });
    }
    console.log(result);
    return res.status(200).json({
      success: true,
      message: "Success Add student",
      result: result,
    });
  });
};
module.exports = {
  getAllInstructors,
  getStudentById,
  getAllStudent,
  addNewStudent,
};
