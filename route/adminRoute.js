import express from "express";
const router = express.Router();

import { getUsers } from "../controller/authController";
import {
  getAllLikes,
  getAllRatings,
  getAllViews,
  getAllComments,
  getAllTags,
} from "../controller/featureController";
import { getAll } from "../controller/todoController";

router.get("/users", getUsers);
router.get("/todos", getAll);
router.get("/likes", getAllLikes);
router.get("/ratings", getAllRatings);
router.get("/views", getAllViews);
router.get("/comments", getAllComments);
router.get("/tags", getAllTags);

export default router;
