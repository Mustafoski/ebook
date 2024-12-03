import express from "express";

const app = express();

// Middleware (optional example)
app.use(express.json()); // Parse JSON payloads

// Define a sample route
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// Define the port
const port = process.env.PORT || 8000;

// Start the server
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
