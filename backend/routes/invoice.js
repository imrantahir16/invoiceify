const {
  createInvoice,
  getInvoice,
  updateInvoice,
  deleteInvoice,
  getInvoicesByUser,
} = require("../controllers/invoiceController");

const router = require("express").Router();

router.get("/:id", getInvoice);
router.post("/", createInvoice);
router.put("/:id", updateInvoice);
router.delete("/:id", deleteInvoice);
router.get("/user/:userId", getInvoicesByUser);

module.exports = router;
