import { Router } from "express";
import characterController from "./character.controller";

const router = Router();

router.post("/", characterController.create);
router.put("/:id", characterController.update);
router.delete("/:id", characterController.remove);
router.get("/:id", characterController.getById);
router.get("/", characterController.getAll);

export default router;
