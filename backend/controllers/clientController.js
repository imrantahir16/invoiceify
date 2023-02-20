const { default: mongoose } = require("mongoose");
const Client = require("../model/Client");
const User = require("../model/User");

const getClient = async (req, res) => {
  const { id: _id } = req.params;

  try {
    if (!mongoose.isValidObjectId(_id))
      return res.status(400).json({ message: "Invalid client ID" });

    const client = await Client.findById(_id);

    if (!client)
      return res
        .status(404)
        .json({ message: `Client with ID of ${_id} not found` });

    res.status(200).json(client);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getClients = async (req, res) => {
  const { page } = req.query;

  const LIMIT = 10;
  const startIndex = (Number(page) - 1) * LIMIT;

  try {
    const total = await Client.countDocuments({});
    const clients = await Client.find()
      .sort({ _id: -1 })
      .limit(LIMIT)
      .skip(startIndex);

    res.status(200).json({
      data: clients,
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / LIMIT),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createClient = async (req, res) => {
  const { name, email, phone, address, userId } = req.body;

  try {
    const existingClient = await Client.findOne({ email });
    if (existingClient)
      return res
        .status(400)
        .json({ message: `Client with ${email} already exists!` });

    const client = await Client.create({
      name,
      email,
      phone,
      address,
      userId,
    });

    res.status(201).json(client);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateClient = async (req, res) => {
  const { id: _id } = req.params;
  const client = req.body;

  try {
    if (!mongoose.isValidObjectId(_id))
      return res.status(400).json({ message: "Invalid Client Id" });
    const updatedClient = await Client.findByIdAndUpdate(_id, { $set: client });
    if (!updatedClient)
      return res
        .status(404)
        .json({ message: `No CLient found with ID : ${_id}` });

    res.status(201).json({ updatedClient, message: "Client details updated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteClient = async (req, res) => {
  const { id: _id } = req.params;
  try {
    if (!mongoose.isValidObjectId(_id))
      return res.status(400).json({ message: "Invalid Client ID" });

    const client = await Client.findByIdAndDelete(_id);
    if (!client) return res.status(404).json({ message: "Client not found" });

    res.status(200).json({ message: "Client deletion successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getClientsByUser = async (req, res) => {
  const { userId } = req.params;

  try {
    if (!mongoose.isValidObjectId(userId))
      return res.status(400).json({ message: "Invalid User ID" });

    const foundUser = await User.findOne({ _id: userId });
    if (!foundUser) return res.status(404).json({ message: "User not found" });

    const clients = await Client.find({ userId: foundUser._id });

    res.status(200).json({ data: clients });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getClient,
  getClients,
  createClient,
  updateClient,
  deleteClient,
  getClientsByUser,
};
