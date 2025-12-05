const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname)));

// Status
app.get("/status", (req, res) => {
  res.json({ status: "Serrurerie Joseph API is running" });
});

// Contact
app.get("/contact", (req, res) => {
  res.json({
    phone: "06 95 52 46 83",
    email: "contact@serrureriejoseph.fr",
    site: "https://www.serrureriejoseph.fr",
    emergency: "Disponible 24h/24 et 7j/7"
  });
});

// Endpoint service info (si ton GPT en a besoin)
app.get("/services", (req, res) => {
  res.json({
    urgence: [
      "Ouverture de porte claquée",
      "Ouverture de porte fermée à clé",
      "Serrure bloquée",
      "Clé cassée",
      "Clé qui tourne dans le vide"
    ],
    remplacement: [
      "Changement de serrure",
      "Remplacement cylindre",
      "Serrure 3 points / 5 points / 7 points",
      "Serrure Fichet, Bricard, Vachette, Héraclès, etc."
    ],
    blindage: [
      "Blindage de porte",
      "Cornières anti-pinces",
      "Barre de pivot",
      "Bloc porte blindé"
    ]
  });
});

// 404
app.get("*", (req, res) => {
  res.status(404).send("Not Found");
});

module.exports = app;
