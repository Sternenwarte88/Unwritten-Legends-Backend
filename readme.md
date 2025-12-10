# 📊 Unwritten Legends – Microservice Architecture Prototype (Legacy)

_This repository represents an **early architecture prototype** for a microservice-based backend of “Unwritten Legends”. It is currently being **refactored and modernized** as part of my ongoing upgrade of older backend projects._

---

## 🎯 Project Purpose

Originally started as my **first real API experiment**, this codebase has evolved into a **microservice playground** where I explore:

- Service boundaries & responsibilities
- Separation of concerns between frontend, domain logic and auth
- Docker-based separation of services
- Future migration paths towards NestJS and more structured backends

This project is the **bridge** between my earlier Node.js/Express style and the more modern, structured **v2 architecture** I am currently building.

---

## 🧱 Current Microservices (Legacy State)

The repository is split into several logical modules, each representing its own service or service-area:

### 1️⃣ Auth Module
- Legacy authentication service (Express + JWT)
- Handles login, token issuing and refresh logic
- Uses Redis/DB for refresh token storage (depending on config)
- **Planned:** Will be replaced by a dedicated NestJS-based Auth microservice in _Unwritten Legends v2_

### 2️⃣ Player Module
- Handles player-related operations and data
- Acts as the domain backbone for user/player information
- Currently implemented in a classic Express style
- **Planned:** Clearer DTOs, better validation and a more modular service structure

### 3️⃣ Realm Module
- Responsible for realm/world-related data and logic
- Early stage: more architectural experiment than finished feature
- **Planned:** Clean separation of realm logic into its own service, with a clearly defined API surface

### 4️⃣ Frontend / Status Dashboard Module
- Independent frontend / status dashboard service
- Shows health/status of other services
- Built as a separate module with its own Express + view layer
- Used to test service-to-service communication and monitoring

---

## 🐳 Microservice Startup (Legacy)

Each service/module can be started separately. Some modules include their own `docker-compose.yml` to boot the required containers.

### Example: Auth Module

```bash
cd auth_module
npm install
npm run dev
# oder Docker-basiert
# docker-compose up --build
```

### Example: Frontend / Dashboard Module

```bash
cd frontend_module
npm install
npm run dev
# oder via Docker
# docker-compose up --build
```

Other modules (player, realm, etc.) follow a similar pattern and will be unified/cleaned up as part of the ongoing refactor.

---

## 🔄 Modernization & Roadmap (Unwritten Legends v2)

This repository is **actively being updated** and is part of a larger effort to bring all older backend projects up to the level of my current standards.

Planned steps include:

- ✅ Keep this repo as a **legacy/architecture prototype**
- 🔁 Gradual refactor of modules toward cleaner boundaries and more consistent structure
- 🧱 Build **Unwritten Legends v2** with:
  - NestJS-based Auth Service
  - clearer domain services for Player & Realm
  - stronger focus on security, DTOs, validation and testing
- 🐳 Unified Docker & environment configuration across services
- 🧪 Introduction of consistent unit and integration tests across all services

The goal is not to *polish legacy forever*, but to use this project as:

- a **documentation of progression** (from first API attempts to more serious microservice architecture)
- a **sandbox** for microservice experiments
- a **stepping stone** toward the cleaner, modern v2 implementation

---

## ⚠️ Note on Code Quality

This project contains a mix of older code and newer ideas. Some parts **do not reflect** my current approach to:

- security
- API structure
- error handling
- testing
- architecture

That is intentional. The repository stays public as a snapshot of my learning curve and is gradually refactored as I roll my projects forward to a more modern and robust standard.

---

## 📜 License

This project is **private** and may **not** be copied, modified, distributed or used commercially. Any use outside of authorized access is **strictly prohibited**.

Have fun exploring the architecture – v2 is on the way. 🚀

