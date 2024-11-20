import express from "express";
import validateRequest from "../../middlewares/validateRequest";

const router = express.Router();

// create user
// router.post(
//   "/signup",
//   validateRequest(userValidationSchema),
//   UserControllers.signUp
// );

// // get all user
// router.get("/", UserControllers.getAllUsers);

// // update user
// router.patch(
//   "/:userId",
//   // authUser,
//   // authAdmin,

//   UserControllers.updateUserRole
// );

export const ProjectRoutes = router;
