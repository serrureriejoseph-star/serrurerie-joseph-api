const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Serrurerie Joseph API is running");
});

app.get("/status", (req, res) => {
  res.json({ service: "Serrurerie Joseph", available: true });
});

app.get("/contact", (req, res) => {
  res.json({
    nom: "Serrurerie Joseph",
    telephone: "0695524683",
    email: "contact@serrureriejoseph.fr"
  });
});

app.listen(3000, () => {
  console.log("API running on port 3000");
});
