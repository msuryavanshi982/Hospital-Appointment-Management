const userModel = require("../models/userModel");
const {
  isValidRequestBody,
  isValidName,
  isValidEmail,
  isValidMobile,
} = require("../validator/validation");

const createUser = async (req, res) => {
  try {
    let data = req.body;
    // request Body validation
    if (!isValidRequestBody(data))
      return res.status(400).send({
        status: false,
        message: "Please provide data in request body!",
      });
    let { name, email, mobile, date, time } = data;
    // name validation
    if (!name)
      return res
        .status(400)
        .send({ status: false, message: "name is required" });

    if (!isValidName(name))
      return res
        .status(400)
        .send({ status: false, message: "Please provide valid name" });

    //email validation
    if (!email)
      return res
        .status(400)
        .send({ status: false, message: "email is required" });

    if (!isValidEmail(email.trim()))
      return res
        .status(400)
        .send({ status: false, message: "email is not Valid or Empty" });

    const duplicateEmail = await userModel.findOne({ email: email });
    if (duplicateEmail)
      return res
        .status(400)
        .send({ status: false, message: "This email is Already Used !" });

    //mobile validation
    if (!mobile)
      return res
        .status(400)
        .send({ status: false, message: "mobile is required" });

    if (!isValidMobile(mobile))
      return res
        .status(400)
        .send({ status: false, message: "mobile is not Valid or Empty" });

    const duplicateMobile = await userModel.findOne({ mobile: mobile });
    if (duplicateMobile)
      return res.status(400).send({
        status: false,
        message: "This mobile number is Already Used !",
      });

    let user = await userModel.create(data);
    return res.status(201).send({
      status: true,
      message: "user is created successfully",
      data: user,
    });
  } catch (err) {
    return res.status(500).send({ status: true, message: err.message });
  }
};

module.exports = { createUser };
