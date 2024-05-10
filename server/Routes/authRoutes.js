import express from "express";
import {registerController , loginController} from "../Controller/authController.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login",loginController);

//test routes

export default router;