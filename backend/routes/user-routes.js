const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const userControllers = require("../controllers/user-controllers");
const userAuthMiddleware= require('../middleware/user-auth');

router.post(
  "/signup",
    [
    check("Name").notEmpty(),
    check("Address").notEmpty(),
    check("Number").notEmpty(),
    check("Email").normalizeEmail().isEmail(),
    check("Password").isLength({ min: 6 }),
  ],
  userControllers.signup
);

router.post(
  "/login",
  [check("Email").notEmpty(), check("Password").notEmpty()],
  userControllers.login
);


router.use(userAuthMiddleware);


router.get("/user/:uid", userControllers.getUser);
router.put("/user/:uid/:pid", userControllers.updateUserProduct);
router.patch("/user/:uid/:pid", userControllers.deleteUserProduct);

module.exports = router;
