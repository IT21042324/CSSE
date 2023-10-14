const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");

const bcrypt = require("bcryptjs");

const userSchema = new Schema(
  {
    name: {
      type: String,
      default: "Sam Dutts",
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    userType: {
      type: String,
      required: true,
      default: "normalUser",
    },
    image: String,
    credits: {
      type: Number,
      default: 100,
    },
    token: String,
  },
  { timestamps: true }
);

userSchema.statics.signup = async function (
  name,
  userName,
  password,
  userType,
  image,
  credits,
  token
) {
  const exist = await this.findOne({ userName });

  if (!userName || !password || !userType)
    throw Error("Please fill all fields");

  if (!validator.isEmail(userName)) {
    throw Error("UserName is invalid");
  }

  if (exist) {
    throw Error("UserName is already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const singedUser = await this.create({
    name,
    userName,
    password: hash,
    userType,
    image,
    credits,
    token,
  });

  return singedUser;
};

userSchema.statics.login = async function (userName, password) {
  if (!userName || !password) throw Error("Please fill all fields");

  const user = await this.findOne({ userName });
  if (!user) throw Error("User Name doesn't exist");

  const match = await bcrypt.compare(password, user.password); //returns true or false

  if (!match) {
    throw Error("Incorrect Password");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
