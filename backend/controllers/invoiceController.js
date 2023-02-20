const { default: mongoose } = require("mongoose");
const Invoice = require("../model/Invoice");
const User = require("../model/User");

const createInvoice = async (req, res) => {
  const invoice = req.body;

  try {
    const newInvoice = await Invoice.create(invoice);
    res.status(201).json(newInvoice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getInvoice = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.isValidObjectId(id))
      return res.status(400).json({ message: "Invalid invoice ID" });

    const foundInvoice = await Invoice.findById(id);
    if (!foundInvoice)
      return res.status(404).json({ message: "No Invoice found" });

    res.status(200).json(foundInvoice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateInvoice = async (req, res) => {
  const { id: _id } = req.params;
  const invoice = req.body;

  try {
    if (!mongoose.isValidObjectId(_id))
      return res.status(400).json({ message: "Invalid Invoice Id" });
    const updatedInvoice = await Invoice.findByIdAndUpdate(
      _id,
      {
        $set: invoice,
      },
      { new: true }
    );
    if (!updatedInvoice)
      return res
        .status(404)
        .json({ message: `No Invoice found with ID : ${_id}` });

    res
      .status(201)
      .json({ updatedInvoice, message: "Invoice details updated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteInvoice = async (req, res) => {
  const { id: _id } = req.params;
  try {
    if (!mongoose.isValidObjectId(_id))
      return res.status(400).json({ message: "Invalid Invoice ID" });

    const invoice = await Invoice.findByIdAndDelete(_id);
    if (!invoice) return res.status(404).json({ message: "Invoice not found" });

    res.status(200).json({ message: "Invoice deletion successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getInvoicesByUser = async (req, res) => {
  const { userId } = req.params;

  try {
    if (!mongoose.isValidObjectId(userId))
      return res.status(400).json({ message: "Invalid User ID" });

    const foundUser = await User.findOne({ _id: userId });
    if (!foundUser) return res.status(404).json({ message: "User not found" });

    const invoices = await Invoice.find({ userId: foundUser._id });

    res.status(200).json({ data: invoices });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createInvoice,
  getInvoice,
  updateInvoice,
  deleteInvoice,
  getInvoicesByUser,
};
