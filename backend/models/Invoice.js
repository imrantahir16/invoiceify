const { default: mongoose } = require("mongoose");

const invoiceSchema = mongoose.Schema(
  {
    dueDate: Date,
    currency: String,
    items: [
      {
        itemName: String,
        unitPrice: String,
        quantity: String,
        discount: String,
      },
    ],
    rates: String,
    vat: Number,
    total: Number,
    subTotal: Number,
    notes: String,
    status: String,
    invoiceNumber: String,
    type: String,
    creator: [String],
    totalAmountReceived: Number,
    client: {
      name: String,
      email: String,
      phone: String,
      address: String,
    },
    paymentRecords: [
      {
        amountPaid: Number,
        datePaid: Date,
        paymentMethod: String,
        note: String,
        paidBy: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.Model("Invoice", invoiceSchema);
