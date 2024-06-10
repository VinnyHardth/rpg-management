import { Router } from "express";

import { isAuth } from "../../middlewares/auth/isAuth";
import { isCharacterOwner } from "../../middlewares/auth/isCharacterOwner";

import characterController from "./character.controller";

const router = Router();

router.post("/", isAuth, characterController.create);
router.put("/:id", isAuth, isCharacterOwner, characterController.update);
router.delete("/:id", isAuth, isCharacterOwner, characterController.remove);
router.get("/:id", characterController.getById);
router.get("/", characterController.getAll);

export default router;
