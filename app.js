const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Simple homepage
app.get("/", (req, res) => {
  res.send("Hello from AWS CodePipeline + Node.js!");
});

// Example API endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date() });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
