const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Servir tout le contenu du dossier public
app.use(express.static(path.join(__dirname, "public")));

// -------------------------
// ROUTES POUR LE GPT STORE
// -------------------------

// Routes propres pour les pages légales (sans .html)
app.get("/legal/privacy", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "legal", "privacy.html"));
});

app.get("/legal/terms", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "legal", "terms.html"));
});

// -------------------------
// API ROUTES
// -------------------------

app.get("/status", (req, res) => {
  res.json({ status: "Serrurerie Joseph API is running" });
});

app.get("/contact", (req, res) => {
  res.json({
    phone: "06 95 52 46 83",
    email: "contact@serrureriejoseph.fr",
    site: "https://www.serrureriejoseph.fr"
  });
});

app.post("/request", (req, res) => {
  const { name, phone, message } = req.body;

  if (!name || !phone || !message) {
    return res.status(400).json({ error: "Missing fields" });
  }

  res.json({
    success: true,
    message: "Request received. The locksmith will contact you shortly."
  });
});

// -------------------------
// LOCAL SERVER (DEV ONLY)
// -------------------------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serrurerie Joseph API running locally on port ${PORT}`);
});

module.exports = app;
