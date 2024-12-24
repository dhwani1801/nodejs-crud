import express, { Request, Response, Router } from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controller/user.controller";

const router = Router();

router.post("/", createUser);
//router.get("/:id", getUserById);
router.get("/", getAllUsers);

router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
