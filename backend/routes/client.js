const {
  getClient,
  getClients,
  createClient,
  updateClient,
  deleteClient,
  getClientsByUser,
} = require("../controllers/clientController");

const router = require("express").Router();

router.get("/:id", getClient);
router.get("/", getClients);
router.get("/user/:userId", getClientsByUser);
router.post("/", createClient);
router.put("/:id", updateClient);
router.delete("/:id", deleteClient);

module.exports = router;
