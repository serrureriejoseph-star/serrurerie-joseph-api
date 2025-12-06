const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Servir les fichiers statiques à la racine (ai-plugin.json, .well-known, assets, etc.)
app.use(express.static(path.join(__dirname)));

// STATUS
app.get("/status", (req, res) => {
  res.json({ status: "Serrurerie Joseph API is running" });
});

// CONTACT
app.get("/contact", (req, res) => {
  res.json({
    phone: "06 95 52 46 83",
    email: "contact@serrureriejoseph.fr",
    site: "https://www.serrureriejoseph.fr",
    emergency: "Disponible 24h/24 et 7j/7"
  });
});

// PAGE LÉGALE : POLITIQUE DE CONFIDENTIALITÉ
app.get("/legal/privacy", (req, res) => {
  res.type("html").send(`<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Politique de Confidentialité – Serrurerie Joseph</title>
</head>
<body>
  <h1>Politique de Confidentialité</h1>
  <p>Cette politique explique comment Serrurerie Joseph utilise les informations fournies par les utilisateurs.</p>

  <h2>1. Données collectées</h2>
  <p>Le service peut utiliser les informations que vous fournissez via ChatGPT, telles que :</p>
  <ul>
    <li>Nom</li>
    <li>Numéro de téléphone</li>
    <li>Adresse ou zone d’intervention</li>
    <li>Description du problème de serrurerie</li>
  </ul>

  <h2>2. Utilisation des données</h2>
  <p>Ces informations ne servent qu’à :</p>
  <ul>
    <li>Vous informer sur les services de Serrurerie Joseph</li>
    <li>Vous aider à préparer une éventuelle intervention</li>
  </ul>

  <h2>3. Stockage des données</h2>
  <p>Le GPT lui-même ne stocke pas vos données. Les échanges peuvent être enregistrés par OpenAI conformément à leurs propres politiques.</p>

  <h2>4. Partage des informations</h2>
  <p>Les données ne sont pas vendues ni partagées avec des tiers.</p>

  <h2>5. Contact</h2>
  <p>Pour toute question, vous pouvez contacter :<br>
  Email : contact@serrureriejoseph.fr<br>
  Téléphone : 06 95 52 46 83</p>
</body>
</html>`);
});

// PAGE LÉGALE : CONDITIONS D’UTILISATION
app.get("/legal/terms", (req, res) => {
  res.type("html").send(`<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Conditions d’Utilisation – Serrurerie Joseph</title>
</head>
<body>
  <h1>Conditions d’Utilisation</h1>
  <p>Les présentes conditions encadrent l’utilisation du GPT Serrurerie Joseph.</p>

  <h2>1. Objet</h2>
  <p>Le GPT fournit des informations et des conseils sur les services de serrurerie proposés par Serrurerie Joseph.</p>

  <h2>2. Utilisation du service</h2>
  <p>L’utilisateur s’engage à poser des questions de bonne foi et à fournir des informations exactes en cas de demande d’assistance.</p>

  <h2>3. Limitation de responsabilité</h2>
  <p>Les informations fournies par le GPT sont indicatives. Les tarifs, délais et modalités d’intervention dépendent toujours de la situation réelle et sont confirmés directement avec le serrurier.</p>

  <h2>4. Contact</h2>
  <p>Pour toute demande :<br>
  Email : contact@serrureriejoseph.fr<br>
  Téléphone : 06 95 52 46 83</p>
</body>
</html>`);
});

// 404 pour le reste
app.get("*", (req, res) => {
  res.status(404).send("Not Found");
});

module.exports = app;
