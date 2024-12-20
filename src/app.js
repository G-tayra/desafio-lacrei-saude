console.log("Starting the server...");

const express = require("express");
const app = express();

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "healthy" });
});

app.post("/api/greet", (req, res) => {
  const name = req.body.name || "World";
  res.status(200).json({ message: `Hello, ${name}!` });
});

module.exports = app;

// Set the port and start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

