const { signup, signin } = require("../controllers/userController");

const router = require("express").Router();

router.post("/signup", signup);
router.post("/signin", signin);

module.exports = router;
