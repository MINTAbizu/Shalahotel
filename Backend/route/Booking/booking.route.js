import express from "express";
const route = express.Router();
import  {bookcontroller}  from "../../controller/booking/booking.controller.js";

route.post("/booking", bookcontroller);
route.get("/getbookings", bookcontroller);
route.delete("/deletebooking/:id", bookcontroller);
export default route;