const router = require("express").Router();

const {
  userLogin,
  userSignUp,
  updateUserName,
  getUserById,
  getAllUsers,
  deleteUserById,
  updateUserCredits,
} = require("../controller/user");

router.post("/login", userLogin);
router.post("/signup", userSignUp);
router.get("/", getAllUsers);
router.patch("/update/:userId", updateUserName);
router.get("/:id", getUserById);
router.delete("/deleteUser/:id", deleteUserById);
router.patch("/update/credits/:id", updateUserCredits);

module.exports = router;
