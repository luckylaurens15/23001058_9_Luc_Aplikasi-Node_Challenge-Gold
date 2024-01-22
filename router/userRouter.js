const express = require("express");
const userRouter = express.Router();

const {UserController} = require("../controllers/userController");

userRouter
    .route("/login")
    .get(UserController.loginPage)
    .post(UserController.loginUser);

userRouter
    .route("/signup")
    .get(UserController.signupPage)
    .post(UserController.signupUser);

userRouter
    .route("/edit/:id")
    .get(UserController.editUserPage)
    .put(UserController.editUser);


module.exports = userRouter;