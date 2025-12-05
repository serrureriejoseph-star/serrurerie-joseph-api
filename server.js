const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());

// Servir tous les fichiers statiques à la racine
app.use(express.static(path.join(__dirname)));

// Endpoint status
app.get("/status", (req, res) => {
  res.json({ status: "Serrurerie Joseph API is running" });
});

// Endpoint contact
app.get("/contact", (req, res) => {
  res.json({
    phone: "06 95 52 46 83",
    email: "contact@serrureriejoseph.fr",
    site: "https://www.serrureriejoseph.fr"
  });
});

// Pour éviter les 404 sur les routes inconnues
app.get("*", (req, res) => {
  res.status(404).send("Not Found");
});

module.exports = app;
