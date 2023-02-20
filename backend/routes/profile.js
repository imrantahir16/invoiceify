const {
  getProfile,
  createProfile,
  getProfileByUser,
  updateProfile,
  deleteProfile,
} = require("../controllers/profileController");

const router = require("express").Router();

router.get("/:id", getProfile);
router.post("/", createProfile);
router.put("/:id", updateProfile);
router.delete("/:id", deleteProfile);
router.get("/user/:userId", getProfileByUser);

module.exports = router;
