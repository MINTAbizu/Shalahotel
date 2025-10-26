import express from "express";
import { getContents, addContent, updateContent, deleteContent } from "../controllers/content.controller.js";

const router = express.Router();

router.get("/", getContents);
router.post("/", addContent);
router.put("/:id", updateContent);
router.delete("/:id", deleteContent);

export default router;
