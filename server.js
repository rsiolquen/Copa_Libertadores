import express from "express";
import cors from "cors";
import { paises, clubes } from "./datos.js";

const app = express();
app.use(cors());

const PORT = 3000;

// Aquí agregaremos nuestras rutas
app.get("/api/clubes", (req, res) => {
  const nombrePais = req.query.pais;

  if (nombrePais !== undefined) {
    const pais = paises.find(
      (p) => p.nombre.toLowerCase() === String(nombrePais).toLowerCase(),
    );

    if (!pais) {
      return res.status(404).json({
        error: `No existe el país ${nombrePais}`,
      });
    }

    const clubesDelPais = clubes.filter((c) => c.paisId === pais.id);

    return res.json(clubesDelPais);
  }

  res.json(clubes);
});

app.get("/api/titulos/:club", (req, res) => {
  const nombreClub = req.params.club;

  const club = clubes.find(
    (c) => c.nombre.toLowerCase() === nombreClub.toLowerCase(),
  );

  if (!club) {
    return res.status(404).json({
      error: `No existe el club ${nombreClub}`,
    });
  }

  res.json(club.titulos);
});

app.get("/api/clubes/:id", (req, res) => {
  const id = Number(req.params.id);
  const club = clubes.find((c) => c.id === id);

  if (!club) {
    return res.status(404).json({
      error: `No existe el club ${req.params.id}`,
    });
  }

  res.json(club);
});

app.listen(PORT, () => {
  console.log(`🏆 API escuchando en http://localhost:${PORT}`);
});
