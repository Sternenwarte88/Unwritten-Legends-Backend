# 📊 Unwritten Legends – Microservice Architecture Prototype (Legacy)

_This repository represents an early, experimental prototype for a microservice‑inspired backend. It remains publicly available as a snapshot of my backend evolution and a reference point for how my architectural thinking has changed over time._

---

## 🎯 Purpose of This Repository

This codebase began as my **first larger backend experiment**, created long before my current standards in architecture, testing, and security. Today, it serves three purposes:

- a **legacy reference** to understand where my early service designs came from
- a **playground** for experimenting with modularity, separation of concerns and multi‑service layouts
- a **contrast point** to my modern backend work (e.g., NestJS, DTO‑driven APIs, structured modules)

It is **not** intended to be polished, feature‑complete or actively expanded. It documents a learning path.

---

## 🧱 Legacy Service Modules

The repository is split into several modules, each reflecting its own service area. Their structure mirrors my early attempt at microservice separation, though not all modules reached a mature state.

### 1️⃣ Auth Module (Legacy)
- Express‑based authentication service (JWT)
- Handles login, token issuing and basic refresh logic
- Early experiment using Redis/DB for refresh token storage
- **Note:** Remains legacy; modern auth experiments happen outside this repository

### 2️⃣ Player Module
- Manages user/player‑related data and operations
- Implemented in a classic Express service style
- Demonstrates my first attempts at domain modeling and service boundaries

### 3️⃣ Realm Module
- Prototype for realm/world‑related data
- More architectural experiment than functional service
- Useful for demonstrating early ideas about separating domain responsibilities

### 4️⃣ Frontend / Status Dashboard Module
- Independent Express frontend
- Displays health/status of other services
- Used to explore lightweight service‑to‑service communication and monitoring

---

## 🐳 Service Startup (Legacy Examples)

Each module can be started independently. Some include their own `docker-compose.yml` files for convenience.

### Auth Module
```bash
dcd auth_module
npm install
npm run dev
# or via Docker
# docker-compose up --build
```

### Frontend / Dashboard Module
```bash
dcd frontend_module
npm install
npm run dev
# or via Docker
# docker-compose up --build
```

Other modules follow similar patterns.

---

## 🔄 Modernization & Learning Context

This repository is **not under active redevelopment**.

My current backend focus lies in:
- NestJS
- modular domain design
- security‑focused services
- DTO‑driven API structure
- consistent testing (unit + integration)

From time to time, I may revisit this repo to:
- review old patterns
- compare legacy vs. modern implementations
- try small architectural ideas

There is **no intention** to rewrite the entire project or migrate it fully to NestJS. It remains a legacy prototype that documents my progression.

---

## ⚠️ Code Quality Disclaimer

This repository contains a mixture of older logic and evolving ideas. Some parts do **not** reflect my current standards for:
- error handling
- domain design
- validation
- security
- testing

This is intentional. The value of this repo is **historical and educational**, not production‑oriented.

---

## 📜 License

This project is **private** and may not be copied, modified, distributed or used commercially. Any use outside of authorized access is strictly prohibited.

---

_This repository remains online as a legacy milestone. New backend work, including modern service designs, happens in separate codebases with updated practices._

