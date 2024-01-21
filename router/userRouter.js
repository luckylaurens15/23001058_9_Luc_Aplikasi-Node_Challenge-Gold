const express = require("express");
const userRouter = express.Router();

const {UserController} = require("../controllers/userController.js");

userRouter
    .route("/login")
    .get(UserController.loginPage)
    .post(UserController.loginUser);

userRouter
    .route("/signup")
    .get(UserController.signupPage)
    .post(UserController.signupUser);

userRouter
    .route("/edit")
    .get(UserController.editUserPage)
    .put(UserController.editUser);


module.exports = userRouter;