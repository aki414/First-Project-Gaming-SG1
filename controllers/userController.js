const User = require("../models/userModel");

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      message: "User created !!!!",
      data: { newUser },
    });
  } catch (error) {
    res.status(400).json({
      message: "Fail !!!!",
      error: error,
    });
  }
};
exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      message: "User updated !!!!",
      data: { updatedUser },
    });
  } catch (error) {
    res.status(400).json({
      message: "Fail !!!!",
      error: error,
    });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).json({
      message: "All Users !!!!",
      data: { allUsers },
    });
  } catch (error) {
    res.status(400).json({
      message: "Fail !!!!",
      error: error,
    });
  }
};
exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "User deleted !!!!",
      data: { deletedUser },
    });
  } catch (error) {
    res.status(400).json({
      message: "Fail !!!!",
      error: error,
    });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      message: "User found !!!!",
      data: { user },
    });
  } catch (error) {
    res.status(400).json({
      message: "Fail !!!!",
      error: error,
    });
  }
};
