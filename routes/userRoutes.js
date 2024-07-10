const userController = require("../controllers/userController");

const userRouter = require("express").Router();

userRouter.post("/register", userController.register);
userRouter.post("/login", userController.login);
userRouter.post("/logout", userController.logout);
userRouter.get("/:id", userController.getUserbyId);
userRouter.put("/:id", userController.editUserbyId);
userRouter.delete("/:id", userController.deleteUserbyId);
userRouter.get("/allUsers", userController.getAllUsers);

userRouter.get("/:userId/cart", userController.getCart);
userRouter.post("/:userId/cart", userController.addToCart);
userRouter.put("/:userId/cart", userController.updateCartItem);
userRouter.delete("/:userId/cart/:productId", userController.removeCartItem);

module.exports = userRouter;
