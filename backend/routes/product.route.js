import { Router } from "express";
import {
  createProductController,
  deleteProductController,
  getAllProductController,
  getSpecificProductController,
  updateProductController,
} from "../controller/product.controller.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import { isAuthorized } from "../middleware/isAuthorized.js";

export const productRouter = Router();
productRouter.post(
  // frontend bata req aayo
  "/create", // create bhanne route ma req aayo frontend bata req.body ma product ko data aayo aani req.headers ma token aayo
  isAuthenticated, // req.headers bata aako token lai middleware ma pathayo middleware le tyo token verify garcha rw verify nabhaye 401 error falcha error chaina bhaney next()
  isAuthorized(["admin"]), // req.userId bata id get huncha rw yo middleware chalcha aaba middleware ma user ko role check huncha isAuthorized function ma role bhanney parameter huncha jasko value yaha bata argument ma pathaincha is role user ko role sanga mileyna bhani error aaucha 403 forbidden ko
  createProductController,
);
productRouter.get("/getAll", getAllProductController);
productRouter.get("/get/:id", getSpecificProductController); // "/:" lai dynamic routing bhanincha
productRouter.patch("/update/:id", updateProductController);
productRouter.delete("/delete/:id", deleteProductController);
