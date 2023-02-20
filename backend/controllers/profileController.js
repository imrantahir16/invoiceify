const { default: mongoose } = require("mongoose");
const Profile = require("../model/profile");
const User = require("../model/User");

const getProfile = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.isValidObjectId(id))
      return res.status(400).json({ message: "Invalid profile ID" });
    const foundProfile = await Profile.findById(id);
    if (!foundProfile)
      return res.status(404).json({ message: "Profile not found" });
    res.status(200).json(foundProfile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createProfile = async (req, res) => {
  const {
    name,
    email,
    phoneNumber,
    businessName,
    address,
    paymentDetails,
    logo,
    website,
    userId,
  } = req.body;

  try {
    const foundProfile = await Profile.findOne({ email });
    if (foundProfile)
      return res
        .status(409)
        .json({ message: `Profile with email ${email} already exists!` });

    const newProfile = await Profile.create({
      name,
      email,
      phoneNumber,
      businessName,
      address,
      paymentDetails,
      logo,
      website,
      userId,
    });

    res.status(201).json(newProfile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProfileByUser = async (req, res) => {
  const { userId } = req.params;

  try {
    if (!mongoose.isValidObjectId(userId))
      return res.status(400).json({ message: "Invalid User ID" });

    const foundUser = await User.findOne({ _id: userId });
    if (!foundUser) return res.status(404).json({ message: "User not found" });

    const profile = await Profile.findOne({ userId: foundUser._id });

    res.status(200).json({ data: profile });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProfile = async (req, res) => {
  const { id: _id } = req.params;
  const profile = req.body;

  try {
    if (!mongoose.isValidObjectId(_id))
      return res.status(400).json({ message: "Invalid Profile Id" });
    const updatedProfile = await Profile.findByIdAndUpdate(
      _id,
      {
        $set: profile,
      },
      { new: true }
    );
    if (!updatedProfile)
      return res
        .status(404)
        .json({ message: `No Profile found with ID : ${_id}` });

    res
      .status(201)
      .json({ updatedProfile, message: "Profile details updated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProfile = async (req, res) => {
  const { id: _id } = req.params;
  try {
    if (!mongoose.isValidObjectId(_id))
      return res.status(400).json({ message: "Invalid Profile ID" });

    const profile = await Profile.findByIdAndDelete(_id);
    if (!profile) return res.status(404).json({ message: "Profile not found" });

    res.status(200).json({ message: "Profile deletion successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProfile,
  createProfile,
  updateProfile,
  deleteProfile,
  getProfileByUser,
};
