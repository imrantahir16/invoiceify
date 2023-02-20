const express = require("express");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const connectDB = require("./config/db");
const mongoose = require("mongoose");
const errorHandler = require("./middleware/errorhandler");

require("colors");
require("dotenv").config();

const app = express();
connectDB();

// middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/user", require("./routes/user"));
app.use("/api/client", require("./routes/client"));
app.use("/api/profile", require("./routes/profile"));
app.use("/api/invoice", require("./routes/invoice"));

const PORT = process.env.PORT || 5000;

// errorMiddleware
app.use(errorHandler);

mongoose.connection.once("open", () => {
  console.log("Database connected".green.underline);
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.cyan.underline);
  });
});
