const express = require("express");
const studentController = require("../Controllers/studentController");
const router = new express.Router();

//register api
router.post("/registered", studentController.register);

//get student details
router.get("/get-student-details", studentController.getStudentDetails)

module.exports = router;
