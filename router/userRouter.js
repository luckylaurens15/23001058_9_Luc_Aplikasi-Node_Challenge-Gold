const express = require("express");
const userRouter = express.Router();

const {UserController} = require("../controllers/userController.js");

userRouter
    .route("/login")
    .get(UserController.loginPage)
    .post(UserController.loginUser);


module.exports = userRouter;