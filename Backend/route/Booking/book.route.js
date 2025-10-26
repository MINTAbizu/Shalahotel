import express from "express";
const route = express.Router();
import  bookcontroller  from "../../controller/Booking/book.controller.js";

route.post("/book", bookcontroller);
route.get("/getbookings", bookcontroller);
route.delete("/deletebooking/:id", bookcontroller);
export default route;