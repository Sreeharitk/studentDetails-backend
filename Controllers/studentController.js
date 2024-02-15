const students = require("../Models/studentModel");

//register
exports.register = async (req, res) => {
  //   console.log("inside register api");
  const {
    firstname,
    lastname,
    adress,
    email,
    gender,
    mobile,
    password,
    dob,
    course,
  } = req.body;
  try {
    const existingUser = await students.findOne({ email });
    if (existingUser) {
      res.status(406).json("Student already exists!!");
    } else {
      const newStudent = new students({
        firstname,
        lastname,
        adress,
        email,
        gender,
        mobile,
        password,
        dob,
        course,
      });
      await newStudent.save();
      res.status(200).json(newStudent);
    }
  } catch (err) {
    res.status(401).json(err);
  }
};

//get student details
exports.getStudentDetails = async (req, res) => {
  try {
    const studentDetails = await students.find();
    res.status(200).json(studentDetails)
  } catch (err) {
    res.status(401).json(err);
  }
};
