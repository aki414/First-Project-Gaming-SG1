const express = require("express");
const { createUser, updateUser, getAllUsers, deleteUser, getUserById ,signUp} = require("../controllers/userController");
const Router = express.Router();
Router.route("/").post(createUser).get(getAllUsers);
Router.route("/:id").patch(updateUser).delete(deleteUser).get(getUserById);
Router.route("/signUp").post(signUp);
module.exports = Router;
