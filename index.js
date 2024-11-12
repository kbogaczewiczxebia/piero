const express = require('express');
const app = express();

// Używamy portu zdefiniowanego przez Rendera lub domyślnego 3000
const PORT = process.env.PORT || 3000;

// Lista pierogów
const pierogiList = [
  'Pierogi ruskie',
  'Pierogi z mięsem',
  'Pierogi z kapustą i grzybami',
  'Pierogi ze szpinakiem i serem',
  'Pierogi z serem na słodko',
  'Pierogi z jagodami',
  'Pierogi z truskawkami',
  'Pierogi z jabłkami',
  'Pierogi z dynią',
  'Pierogi z łososiem',
  'Pierogi z ziemniakami',
];

// Endpoint GET /pierogi
app.get('/pierogi', (req, res) => {
  res.json({ pierogi: pierogiList });
});

// Uruchomienie serwera
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});