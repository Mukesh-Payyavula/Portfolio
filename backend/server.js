const express = require("express");
const dotenv = require("dotenv");
const emailRoutes = require("./routes/emailRoutes");
const cors = require("cors");

dotenv.config();

const app = express();

// Configure CORS
const corsOptions = {
    origin: "*", // Allow all origins, you might want to restrict this in production
    credentials: true, // Allow credentials like cookies to be sent
    optionSuccessStatus: 200, // Handle legacy browsers
};

app.use(cors(corsOptions)); // Use the defined corsOptions for CORS

app.use(express.json()); // Tells the server to accept JSON data from the frontend

// Email routes
app.use("/", emailRoutes);

app.get("/", (req, res) => {
    res.send("Server is running");
});

const PORT = process.env.PORT || 8000; // Fallback to 6000 if PORT is not set in the environment
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
