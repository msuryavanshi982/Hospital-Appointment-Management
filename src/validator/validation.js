const mongoose = require("mongoose");

const isValidRequestBody = function (value) {
  return Object.keys(value).length > 0;
};

const isValidName = function (value) {
  if (typeof value === "undefined" || value === null || value == " ")
    return false;
  if (
    typeof value === "string" &&
    value.trim().length > 0 &&
    value.match(/^[a-zA-Z]*$/)
  )
    return true;
  return false;
};

const isValidEmail = function (value) {
  return /^[a-z]{1}[a-z-A-Z-0-9]{1,}@[a-z-A-Z]{3,}[.]{1}[a-z]{3,6}$/.test(
    value
  );
};

const isValidMobile = function (value) {
  return /^[\s]*[6-9]\d{9}[\s]*$/gi.test(value);
};

module.exports = {
  isValidRequestBody,
  isValidName,
  isValidEmail,
  isValidMobile,
};
