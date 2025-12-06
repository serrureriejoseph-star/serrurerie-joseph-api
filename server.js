const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());

// Servir les fichiers statiques du dossier public
app.use(express.static(path.join(__dirname, "public")));

// Endpoint /status
app.get("/status", (req, res) => {
  res.json({ status: "Serrurerie Joseph API is running" });
});

// Endpoint /contact
app.get("/contact", (req, res) => {
  res.json({
    phone: "06 95 52 46 83",
    email: "contact@serrureriejoseph.fr",
    site: "https://www.serrureriejoseph.fr"
  });
});

// Endpoint /request (réponses automatiques)
app.get("/request", (req, res) => {
  res.json({
    message:
      "Merci pour votre demande ! Un serrurier vous rappellera très rapidement. Pour une urgence, appelez directement le 06 95 52 46 83."
  });
});

// Catch-all 404
app.get("*", (req, res) => {
  res.status(404).send("Not Found");
});

module.exports = app;
