# 📊 Unwritten Legends - Status Dashboard & Auth Microservice

Ein modernes Status-Dashboard und ein funktionsfähiger Auth-Microservice für Unwritten Legends, das
die Benutzerverwaltung und API-Überwachung übernimmt. 🚀🔥

## 📌 **Features**

- ✅ Echtzeit-Statusabfragen mehrerer APIs
- ✅ Statusanzeige mit Ampel-Icons 🟢🟡🔴
- ✅ Automatische Aktualisierung alle 5 Minuten mit Countdown ⏳
- ✅ Authentifizierungs-Microservice mit JWT-Token-Verwaltung
- ✅ Docker-Ready 🐳 (Microservices)
- ✅ Responsive Dark-Theme 🌙

---

## 🛠️ **Installation & Start**

### Voraussetzungen:

- Docker 🐳
- Docker Compose 📦
- Node.js 🟢

### 🚀 **Docker Build & Start**

```bash
# Projekt klonen
git clone https://github.com/username/unwritten-legends.git
cd unwritten-legends

# Docker-Container starten (Auth-Service & Dashboard)
docker-compose up --build
```

### 💻 **Lokale Entwicklung**

```bash
# Abhängigkeiten installieren
npm install

# Auth-Microservice starten
npm run dev:auth

# Dashboard starten
npm run dev:dashboard
```

---

## ⚙️ **Projektstruktur**

### Auth-Microservice

```
📂 src/
 ┣ 📂 config/
 ┃ ┣ 📜 db.ts           # MongoDB-Verbindung
 ┃ ┗ 📜 redis.ts        # Redis-Verbindung (Token-Storage)
 ┣ 📂 controller/auth/
 ┃ ┗ 📜 authController.ts # Authentifizierung
 ┣ 📂 interfaces/database/
 ┃ ┗ 📜 IUser.ts         # Benutzer-Interface
 ┣ 📂 models/
 ┃ ┗ 📜 user.ts         # Benutzer-Modell
 ┣ 📂 routes/
 ┃ ┗ 📜 authRoute.ts    # Auth-Routen (z. B. /login, /register)
 ┣ 📂 utilities/
 ┃ ┗ 📜 jwtUtil.ts      # JWT-Token-Helper (Sign, Verify)
 ┗ 📜 server.ts         # Express-Server
```

### Status-Dashboard (Finale Struktur)

```
📂 frontend_module/
 ┣ 📂 public/
 ┃ ┗ 📜 style.css       # Styling
 ┣ 📂 src/
 ┃ ┣ 📂 services/
 ┃ ┃ ┗ 📜 apistatus.ts   # API-Statusprüfungen
 ┃ ┣ 📂 views/
 ┃ ┃ ┗ 📜 index.ejs      # EJS-Template
 ┃ ┗ 📜 app.ts           # Express-Server & Statusabfragen
 ┣ 📜 docker-compose.yml
 ┣ 📜 Dockerfile
 ┗ 📜 tsconfig.json
```

---

## 🧩 **Konfiguration**

- **API-Endpoints:** Bearbeiten in `src/services/apistatus.ts`
- **EJS-Template:** In `src/views/index.ejs`
- **Datenbankverbindungen:** In `src/config/db.ts` und `src/config/redis.ts`
- **Ports:** Definiert in `docker-compose.yml`

---

## 📜 **Lizenz**

Dieses Projekt steht unter der MIT-Lizenz. 📃

Viel Spaß und Happy Coding! 🚀😊
