import { Router } from "express"
import {
  blockUsers,
  checkUser,
  deleteUsers,
  getAllUsers,
  login,
  register,
  sendJWT,
  shouldUserBeSignedOut,
  signOut
} from "./user.controller.js";

const userRouter = Router();

userRouter.post("/register", register);
userRouter.post("/login", login, sendJWT);

userRouter.delete("/deleteMany", deleteUsers, shouldUserBeSignedOut);

userRouter.patch("/blockMany", blockUsers, shouldUserBeSignedOut);

userRouter.get("/allUsers", getAllUsers);
userRouter.get("/checkUser", checkUser);
userRouter.get("/signOut", signOut);

export default userRouter;