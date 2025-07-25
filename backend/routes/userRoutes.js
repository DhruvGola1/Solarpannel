import express from "express";
import userController from "../controllers/create/userFormController.js";

const routes = express.Router();

routes.post("/userpost", userController);

export default routes;
