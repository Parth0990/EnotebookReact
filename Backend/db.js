const mongoose = require("mongoose");
const mongoURI =
  "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

const connectTOMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("mongoose Connected");
  });
};

module.exports = connectTOMongo;
