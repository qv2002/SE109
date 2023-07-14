const express = require("express");
const router = express.Router();
const passport = require("passport");
const { isAuthenticatedUser, authorieRoles } = require("../middleware/auth")

const { registerUser, loginUser, authGoogle, logout, forgotPassword, resetPassword, getUserDetail, updatePassword, updateProfile, getAllUser, getSingleUser, deleteUser, updateUserRole } = require("../controllers/userController");
const passportConfig = require("../middleware/passport")
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/auth/google").post(passport.authenticate('google-plus-token', {session : false}), authGoogle);


router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/password/update").put(isAuthenticatedUser, updatePassword);


router.route("/logout").get(logout);


router.route("/me").get(isAuthenticatedUser, getUserDetail);
router.route("/me/update").put(isAuthenticatedUser, updateProfile);


router.route("/admin/users").get(isAuthenticatedUser, authorieRoles("admin"), getAllUser);
router.route("/admin/user/:id").get(isAuthenticatedUser, authorieRoles("admin"), getSingleUser);
router.route("/admin/user/:id").put(isAuthenticatedUser, authorieRoles("admin"), updateUserRole);
router.route("/admin/user/:id").delete(isAuthenticatedUser, authorieRoles("admin"), deleteUser);

module.exports = router;
