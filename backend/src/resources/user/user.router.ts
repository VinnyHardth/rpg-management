import { Router } from "express";
import userController from "./user.controller";

const router = Router();

router.post("/", userController.create);
router.put("/:id", userController.update);
router.delete("/:id", userController.remove);
router.get("/", userController.getAll);
router.get("/:id", userController.getById);
router.get("/username/:username", userController.getByUsername);
router.get("/email/:email", userController.getByEmail);

export default router;
