import express from "express";
import { getMenu, addMenu, updateMenu, deleteMenu } from "../controllers/menu.controller.js";

const router = express.Router();

router.get("/", getMenu);
router.post("/", addMenu);
router.put("/:id", updateMenu);
router.delete("/:id", deleteMenu);

export default router;
