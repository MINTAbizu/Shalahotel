import express from "express";
import { getStores, addStore, updateStore, deleteStore } from "../controllers/store.controller.js";

const router = express.Router();

router.get("/", getStores);
router.post("/", addStore);
router.put("/:id", updateStore);
router.delete("/:id", deleteStore);

export default router;
