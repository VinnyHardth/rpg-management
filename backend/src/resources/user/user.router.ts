import { Router } from "express";

import userController from "./user.controller";
import { createUserSchema } from "./user.schemas";
import { isAuth } from "../../middlewares/auth/isAuth";
import { isAccountOwner } from "../../middlewares/auth/isAccountOwner";
import validateBody from "../../middlewares/validation/validateBody";

const router = Router();

router.post("/", validateBody(createUserSchema), userController.create);
router.put("/:id", isAuth, isAccountOwner, userController.update);
router.delete("/:id", isAuth, isAccountOwner, userController.remove);
router.get("/", userController.getAll);
router.get("/:id", userController.getById);
router.get("/username/:username", userController.getByUsername);
router.get("/email/:email", userController.getByEmail);

export default router;
