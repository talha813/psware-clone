import express from "express";
import {registerController}  from "../controller/authController.js";
import loginController  from "../controller/authController.js";
import { postData } from "../controller/productControlle.js";
import  upload  from "../middleware/uploads.js";
import { getData } from "../controller/productControlle.js";


const router = express.Router();
router.post("/register", registerController);
router.post("login",loginController)

// --------------ProductRoutes---------------
    router.post("/productsPost", upload.array("pictures[]") ,postData)
router.get("/products", getData);


export default router;
