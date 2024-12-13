const express = require("express");
const dotenv = require("dotenv");
const emailRoutes = require("./routes/emailRoutes");
const cors = require("cors");

dotenv.config();

const app = express();

// Configure CORS
const corsOptions = {
    origin: "*", 
    credentials: true, 
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());

// Email routes
app.use("/", emailRoutes);

app.get("/", (req, res) => {
    res.send("Server is running");
});

const PORT = process.env.PORT || 8000; 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
