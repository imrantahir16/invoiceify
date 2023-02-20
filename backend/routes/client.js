const {
  getClient,
  getClients,
  createClient,
  updateClient,
  deleteClient,
  getClientsByUser,
} = require("../controllers/clientController");

const router = require("express").Router();

router.get("/", getClients);
router.get("/:id", getClient);
router.post("/", createClient);
router.put("/:id", updateClient);
router.delete("/:id", deleteClient);
router.get("/user/:userId", getClientsByUser);

module.exports = router;
