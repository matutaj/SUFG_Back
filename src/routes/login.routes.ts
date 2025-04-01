// src/routes/authRoutes.ts
import { Router } from "express";
import { LoginController } from "../../src/model/login/CriarLoginController";

const loginRouter = Router();

loginRouter.post("/", new LoginController().handle);

export { loginRouter };
