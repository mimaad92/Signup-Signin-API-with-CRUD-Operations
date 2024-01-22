const express = require("express");
const { signup, Signin } = require("../controllers/userController");
const userRouter = express.Router();

userRouter.post("/signup", signup);

userRouter.get("/signin", Signin);

module.exports = userRouter;