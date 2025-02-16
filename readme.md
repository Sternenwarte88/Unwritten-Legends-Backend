# 📊 Unwritten Legends - AuthModule & Dashboard Microservices

Dieses Projekt besteht aus zwei separaten Microservices für Unwritten Legends: **AuthModule** und
**Status-Dashboard**, die jeweils ihre eigene `docker-compose.yml` im jeweiligen Ordner enthalten
und separat gebuildet sowie gestartet werden. 🚀🔥

## 📌 **Features**

- ✅ Zwei eigenständige Microservices: **AuthModule** & **Dashboard**
- ✅ Jeder Microservice besitzt eine eigene `docker-compose.yml` im jeweiligen Verzeichnis
- ✅ `.env`-Datei für Konfiguration im **AuthModule** ⚙️
- ✅ Echtzeit-Statusabfragen mehrerer APIs 🟢🟡🔴
- ✅ Authentifizierung mit JWT-Token-Verwaltung 🔐
- ✅ Docker-Ready (separate Container) 🐳
- ✅ Responsive Dark-Theme 🌙

---

## 🛠️ **Installation & Start**

### Voraussetzungen:

- Docker 🐳
- Docker Compose 📦
- Node.js 🟢

### 🚀 **Microservices separat builden & starten:**

```bash
# Projekt klonen
git clone https://github.com/Sternenwarte88/Unwritten-Legends-Backend.git
cd unwritten-legends

# AuthModule: Build & Start
cd auth_module
docker-compose up --build

# Dashboard: Build & Start
cd ../frontend_module
docker-compose up --build
```

### 💻 **Lokale Entwicklung (Separate Services)**

```bash
# AuthModule starten
cd auth_module
npm install
npm run dev

# Dashboard starten
cd ../frontend_module
npm install
npm run dev
```

---

## ⚙️ **Projektstruktur**

### AuthModule Microservice:

```
📂 auth_module/
 ┣ 📂 config/           # DB- & Redis-Verbindungen
 ┣ 📂 controller/auth/   # Authentifizierung
 ┣ 📂 interfaces/        # Benutzer-Interface
 ┣ 📂 models/           # Benutzer-Modell
 ┣ 📂 routes/           # Auth-Routen
 ┣ 📂 utilities/        # JWT-Helper
 ┣ 📜 .env              # Umgebungsvariablen für AuthModule
 ┣ 📜 docker-compose.yml # Docker Compose für AuthModule
 ┗ 📜 server.ts         # Express-Server
```

### Status-Dashboard Microservice:

```
📂 frontend_module/
 ┣ 📂 public/           # CSS & Assets
 ┣ 📂 src/
 ┃ ┣ 📂 services/       # API-Statusprüfungen
 ┃ ┣ 📂 views/          # EJS-Template
 ┃ ┗ 📜 app.ts          # Express-Server
 ┣ 📜 docker-compose.yml # Docker Compose für Dashboard
 ┣ 📜 Dockerfile
 ┗ 📜 tsconfig.json
```

---

## 🧩 **Wichtige Konfigurationen**

- **API-Endpoints:** Bearbeiten in `frontend_module/src/services/apistatus.ts`
- **EJS-Template:** In `frontend_module/src/views/index.ejs`
- **Auth-Datenbank:** Konfigurieren in `auth_module/src/config/db.ts`
- **`.env` für AuthModule:** Wichtige Umgebungsvariablen wie Ports, DB-URLs, JWT-Keys in
  `auth_module/.env` verwalten.
- **Docker Compose:** Jeweils in den `docker-compose.yml` in den Ordnern `auth_module/` und
  `frontend_module/`

---

## 📜 **Lizenz**

Dieses Projekt ist **privat** und darf **nicht** kopiert, verändert, verbreitet oder kommerziell
genutzt werden. Jegliche Verwendung außerhalb der autorisierten Nutzung ist **untersagt**.

Viel Spaß und Happy Coding! 🚀😊
