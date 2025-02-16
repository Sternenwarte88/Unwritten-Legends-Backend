import express from 'express';
import path from 'path';
import { checkApiStatus } from './services/apistatus';

const app = express();
const port = 80;

// 📌 Cache für Status
let servicesCache: any[] = [];
let nextUpdateTimestamp = Date.now() + 300000; // 5 Minuten ab jetzt

// 📌 Funktion zur Statusaktualisierung
async function updateServices() {
  servicesCache = await checkApiStatus();
  nextUpdateTimestamp = Date.now() + 300000; // Nächste Abfrage in 5 Minuten
}

// 📌 Starte sofort die erste Abfrage
updateServices();

// 📌 Alle 5 Minuten automatisch aktualisieren
setInterval(updateServices, 300000);

// 📌 Views und Public
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/public', express.static(path.join(__dirname, 'public')));

// get date in german format

const getDate = () => {
  return new Date().toLocaleString('de-DE', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: 'Europe/Berlin'
  });
};

// 📌 Startseite
app.get('/', (req, res) => {
  const remainingTime = Math.max(0, Math.floor((nextUpdateTimestamp - Date.now()) / 1000));
  res.render('index', {
    title: 'Service Status Dashboard',
    date: getDate(),
    services: servicesCache,
    nextUpdate: remainingTime
  });
});

// 📌 Server starten
app.listen(port, () => {
  console.log(`🚀 Status-Dashboard läuft auf http://localhost:${port}`);
});
