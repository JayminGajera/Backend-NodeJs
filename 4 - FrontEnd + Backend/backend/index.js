const express = require("express");
const app = express();


// The cors module allows defining rules for cross-origin requests, enabling or restricting access to server resources from different domains.
var cors = require("cors"); // imports the cors module, which is a middleware for handling Cross-Origin Resource Sharing (CORS) in Express.js 

require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.use(//This is the configuration object passed to the cors middleware. In this case, it sets the origin property to "*", which means that the server allows requests from any origin. The origin property determines which domains are allowed to make cross-origin requests. By setting it to "*", any domain can make requests to the server.
  cors({
    origin: "*",
  })
);
// Middleware
app.use(express.json());

const userRoutes = require("./routes/user");
app.use("/api/v1", userRoutes);

// CORS Configuration
app.listen(PORT, () => {
  console.log(`THE SERVER IS UP AND RUNNING AT PORT ${PORT}`);
});

const dbConnect = require("./config/database");
dbConnect();

app.get("/", (req, res) => {
  res.send(`<h1>Backend is Running and this is '/' Route</h1>`);
});
