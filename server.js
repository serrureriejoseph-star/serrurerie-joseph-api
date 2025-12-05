const express = require("express");
const cors = require("cors");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname)));

// --- ROUTE STATUS ---
app.get("/status", (req, res) => {
  res.json({ status: "Serrurerie Joseph API is running" });
});

// --- ROUTE CONTACT ---
app.get("/contact", (req, res) => {
  res.json({
    phone: "06 95 52 46 83",
    email: "contact@serrureriejoseph.fr",
    site: "https://www.serrureriejoseph.fr"
  });
});

// --- ROUTE REQUEST (ENVOI EMAIL) ---
app.post("/request", express.json(), async (req, res) => {
  const { name, phone, address, urgency, description } = req.body;

  if (!name || !phone || !address || !urgency) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "contact@serrureriejoseph.fr",
        pass: "vawhshmadmeqlive"
      }
    });

    const mailOptions = {
      from: `"Serrurerie Joseph" <contact@serrureriejoseph.fr>`,
      to: "contact@serrureriejoseph.fr",
      subject: "Nouvelle demande d’intervention Serrurerie Joseph",
      text: `
Nouvelle demande d'intervention :

Nom : ${name}
Téléphone : ${phone}
Adresse : ${address}
Urgence : ${urgency}

Description :
${description || "Aucune description fournie"}
`
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: "Email envoyé avec succès" });
  } catch (error) {
    console.error("Erreur d'envoi email :", error);
    res.status(500).json({ error: "Email sending failed", details: error.toString() });
  }
});

// --- ROUTE 404 (à laisser en dernier) ---
app.get("*", (req, res) => {
  res.status(404).send("Not Found");
});

module.exports = app;
