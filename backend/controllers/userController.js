const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../model/User");
const Profile = require("../model/profile");

const SECRET = process.env.SECRET;
const signup = async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword, bio } =
    req.body;

  try {
    const existingUser = await User.findOne({ email });
    const userProfile = await Profile.findOne({ userId: existingUser?._id });

    if (existingUser)
      return res.status(400).json({ message: "User already exists!" });

    if (password !== confirmPassword)
      return res.status(400).json({ message: "Password doesn't match" });

    // const salt = bcrypt.getSalt(12);
    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      name: `${firstName} ${lastName}`,
      email,
      password: hashedPassword,
      bio,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json(result, userProfile, token);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    const userProfile = await Profile.findOne({ userId: existingUser?._id });

    if (!existingUser)
      return res.status(404).json({ message: "User does not exist!" });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid Credentials" });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: existingUser, token, userProfile });
  } catch (error) {
    res.status(500).json({ messsage: error.message });
  }
};

// forgot password

// reset password

module.exports = {
  signup,
  signin,
};
