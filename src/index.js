import express from "express";
import bodyParser from "body-parser";
import { registerRouter } from "./Router/RegisterRouter.js";
import { errorHandler } from "./Middleware/errorHandler.js";
import { accessValidation } from "./Middleware/accessValidation.js";
import { userRouter } from "./Router/UserProfileRouter.js";
import { plasticWasteDonationRouter } from "./Router/PlasticWasteDonationRouter.js";
import { dataUserRouter } from "./Router/GetDataUserRouter.js";
import { partnerRouter } from "./Router/PartnerRouter.js";
import { datasPartnerRouter } from "./Router/GetDataPartnerRouter.js";
import { tourismRouter } from "./Router/TourismRouter.js";
import { foodRouter } from "./Router/FoodRouter.js";
import { transportRouter } from "./Router/Destination.js";
import { authenticationRouter } from "./Router/AuthRouter.js";

const app = express();
const port = 3000;
try {
  app.use(bodyParser.json());
  // Authentication Routers
  app.use("/api/register", registerRouter); // Register Users And Partners
  app.use("/api/auth/login", authenticationRouter);
  // Protected Routes (require access validation)
  app.use(
    "/api/dropoff-locations",
    accessValidation,
    plasticWasteDonationRouter
  ); // DropOff Locations for plastic waste donation
  app.use("/api/users", accessValidation, userRouter); // User Profiles
  app.use("/api/partners/locations", accessValidation, partnerRouter); // Partner Locations
  app.use("/api/datas/tourisms", accessValidation, tourismRouter); // Tourism Data
  app.use("/api/datas/foods", accessValidation, foodRouter); // Food Data
  app.use("/api/transportation", accessValidation, transportRouter);

  // Public Data Routers
  app.use("/api/datas/users", dataUserRouter); // Public User Data
  app.use("/api/datas/partners", datasPartnerRouter); // Public Partner Data

  // MiddleWare Error Handler
  app.use(errorHandler);

  app.get('/', async (req, res) => {
    res.json({ message : "Selamat Datang"});
  })
  app.listen(port, function () {
    console.log("Server berhasil dijalankan pada port " + port);
  });
} catch (error) {
  console.log(error);
}
