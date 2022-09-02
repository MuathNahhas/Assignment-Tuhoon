const express = require("express");
const PORT = 5000;
const app = express();
app.use(express.json());
require("../db/db");
const studentRouter = require("./routers/students/students.router");
//Router
app.use("/", studentRouter);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
