import express from 'express';
import path from 'path';

const app = express();
const port = 80;

// 📌 Views und Static aus `dist/` nutzen
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 📌 Statische Dateien (CSS) aus `dist/public`
app.use('/public', express.static(path.join(__dirname, 'public')));

// Beispiel-Daten
const services = [
  { name: 'Auth-Service', status: 'Online' },
  { name: 'Database', status: 'Offline' },
  { name: 'Matchmaking', status: 'Online' }
];

// Startseite-Route
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Service Status Dashboard',
    date: new Date().toLocaleString(),
    services: services
  });
});

// Server starten
app.listen(port, () => {
  console.log(`🚀 Status-Dashboard läuft auf http://localhost:${port}`);
});
