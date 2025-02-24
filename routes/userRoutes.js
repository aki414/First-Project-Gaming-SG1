const express = require("express");
const { createUser, updateUser, getAllUsers, deleteUser, getUserById } = require("../controllers/userController");
const Router = express.Router();
Router.route("/").post(createUser);
Router.route("/:id").patch(updateUser);
Router.route("/").get(getAllUsers);
Router.route("/:id").delete(deleteUser);
Router.route("/:id").get(getUserById);
module.exports = Router;
