# 🎮 Unwritten Legends – Microservice Architecture Showcase

> **Skill Focus:** Microservices, Service Communication, Health Monitoring, JWT Authentication, Docker, Infrastructure

A functional microservice system demonstrating independent service architecture with shared infrastructure, real-time health monitoring, and proper separation of concerns.

---

## 🎯 What This Project Demonstrates

This project showcases a **complete microservice ecosystem** – not just application code, but the full infrastructure stack with databases, caching, and service orchestration.

**Part of my portfolio series** – each repo focuses on different backend skills:
| Repo | Focus |
|------|-------|
| [Typescript-demo](https://github.com/Sternenwarte88/Typescript-demo) | Clean Architecture, Testing, TypeDoc |
| [nest-challenge-solo](https://github.com/Sternenwarte88/nest-challenge-solo) | NestJS, DI, Decorators, Validation |
| **Unwritten-Legends** | Microservices, Auth, Infrastructure ← You are here |

---

## 🏗️ System Architecture

```
┌──────────────────────────────────────────────────────────────┐
│                        ul_network                             │
│                                                               │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │                  Status Dashboard                        │ │
│  │              (Health Monitoring UI)                      │ │
│  └──────────┬──────────────┬──────────────┬────────────────┘ │
│             │              │              │                   │
│        /health        /health        /health                  │
│             │              │              │                   │
│             ▼              ▼              ▼                   │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐        │
│  │ Auth Module  │  │Player Module │  │ Realm Module │        │
│  │    (JWT)     │  │   (Users)    │  │  (Worlds)    │        │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘        │
│         │                 │                 │                 │
│         └─────────────────┼─────────────────┘                 │
│                           │                                   │
│                ┌──────────┴──────────┐                        │
│                ▼                     ▼                        │
│         ┌──────────────┐      ┌──────────────┐               │
│         │    Redis     │      │   MongoDB    │               │
│         │  (Tokens)    │      │   (Data)     │               │
│         └──────────────┘      └──────────────┘               │
│                                                               │
└──────────────────────────────────────────────────────────────┘
```

---

## 📦 Repository Structure

This system spans **multiple repositories**, each with a single responsibility:

| Repository | Purpose | Contains |
|------------|---------|----------|
| [Unwritten-Legends-Backend](https://github.com/Sternenwarte88/Unwritten-Legends-Backend) | Application Services | Auth, Player, Realm, Dashboard |
| [Unwritten-Legends-Redis](https://github.com/Sternenwarte88/Unwritten-Legends-Redis) | Session/Token Storage | Redis Docker config |
| [Unwritten-Legends-Mongo](https://github.com/Sternenwarte88/Unwritten-Legends-Mongo) | Data Persistence | MongoDB Docker config |

All services communicate via a shared Docker network (`ul_network`).

---

## 🧱 Service Modules

### 🔐 Auth Module
- JWT-based authentication (login, token issuing, refresh)
- Redis integration for refresh token storage
- Independent Express service

### 👤 Player Module
- User/player data management
- Domain modeling with clear service boundaries
- RESTful API design

### 🌍 Realm Module
- Game world/realm data handling
- Separated domain responsibility
- Demonstrates bounded context thinking

### 📊 Status Dashboard (Frontend Module)
- Real-time health monitoring UI
- Periodically pings all service health endpoints
- Visual overview of system status
- Service-to-service communication example

---

## 🔧 Tech Stack

**Application Layer:**
- Node.js / Express – Service framework
- TypeScript – Type safety across all modules
- JWT – Stateless authentication
- EJS – Dashboard templating

**Infrastructure Layer:**
- Docker / Docker Compose – Containerization
- Redis – Refresh token & session storage
- MongoDB – Data persistence
- Shared Docker Network – Service communication

---

## 🚀 Getting Started

### 1. Start Infrastructure

```bash
# Terminal 1: MongoDB
cd Unwritten-Legends-Mongo
docker-compose up

# Terminal 2: Redis
cd Unwritten-Legends-Redis
docker-compose up
```

### 2. Start Services

```bash
# Terminal 3: Auth Module
cd Unwritten-Legends-Backend/AuthModule
npm install && npm run dev

# Terminal 4: Player Module
cd Unwritten-Legends-Backend/PlayerModule
npm install && npm run dev

# Terminal 5: Realm Module
cd Unwritten-Legends-Backend/RealmModule
npm install && npm run dev

# Terminal 6: Dashboard
cd Unwritten-Legends-Backend/frontend_module
npm install && npm run dev
```

Or use Docker Compose in each module directory.

---

## 📂 Project Structure

```
Unwritten-Legends-Backend/
├── AuthModule/
│   ├── src/
│   ├── docker-compose.yml
│   └── package.json
├── PlayerModule/
│   ├── src/
│   ├── docker-compose.yml
│   └── package.json
├── RealmModule/
│   ├── src/
│   ├── docker-compose.yml
│   └── package.json
├── frontend_module/
│   ├── src/
│   ├── docker-compose.yml
│   └── package.json
└── README.md

Unwritten-Legends-Redis/
└── docker-compose.yml

Unwritten-Legends-Mongo/
└── docker-compose.yml
```

---

## 💡 Key Takeaways

This project demonstrates real-world microservice patterns:

- **Service Independence** – Each module is self-contained and deployable
- **Infrastructure as Code** – Databases containerized and version-controlled
- **Shared Networking** – Services discover each other via Docker network
- **Health Monitoring** – Centralized dashboard for system observability
- **Authentication as a Service** – Auth logic separated from business logic
- **Bounded Contexts** – Clear separation between Player, Realm, and Auth domains

---

## 👤 Author

**Stephan** – Backend Developer  
GitHub: [@Sternenwarte88](https://github.com/Sternenwarte88)
