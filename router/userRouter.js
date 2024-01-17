const express = require("express");
const userRouter = express.Router();

const {loginPage, loginUser} = require("../controllers/userController.js");

userRouter
    .route("/login")
    .get(loginPage)
    .post(loginUser);


module.exports = userRouter;