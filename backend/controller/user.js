const userModel = require("../model/user");

const userLogin = async (req, res) => {
  try {
    const { userName, password } = req.body;

    const user = await userModel.login(userName, password);

    res.json(user);
  } catch (err) {
    console.log(err.message);
    res.json({ err: err.message });
  }
};

const userSignUp = async function (req, res) {
  const { name, userName, password, userType, image, credits, token } =
    req.body;

  try {
    const user = await userModel.signup(
      name,
      userName,
      password,
      userType,
      image,
      credits,
      token
    );

    res.status(200).json(user);
  } catch (err) {
    console.log(err.message);
    res.json({ err: err.message });
  }
};

const getAllUsers = async function (req, res) {
  try {
    const users = await userModel.find();

    console.log(users);
    res.json(users);
  } catch (err) {
    res.send(err.message);
  }
};

const updateUserName = async function (req, res) {
  const { userId } = req.params;
  const { userName } = req.body;

  try {
    const user = await userModel.findOneAndUpdate(
      { _id: userId },
      { userName },
      { new: true }
    );

    return res.json(user);
  } catch (err) {
    console.log(err.message);
  }
};

const deleteUserById = async (req, res) => {
  try {
    const data = await userModel.findByIdAndDelete(req.params.id);

    res.status(200).json(data);
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
};

const getUserById = async function (req, res) {
  const { id } = req.params;

  try {
    const user = await userModel.find({ _id: id });

    res.status(200).json(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
};

const updateUserCredits = async (req, res) => {
  try {
    const updatedUserInfo = await userModel.findByIdAndUpdate(
      req.params.id,
      {
        $inc: { credits: req.body.credits },
      },
      { new: true }
    );

    res.status(200).json(updatedUserInfo);
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
};

module.exports = {
  userSignUp,
  userLogin,
  getAllUsers,
  updateUserName,
  deleteUserById,
  getUserById,
  updateUserCredits,
};
