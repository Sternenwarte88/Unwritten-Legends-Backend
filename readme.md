# 📊 Unwritten Legends – AuthModule & Dashboard Microservices

This project consists of two separate microservices for **Unwritten Legends**: **AuthModule** and **Status Dashboard**.  
Each service has its own `docker-compose.yml` inside its folder and can be built and started independently. 🚀🔥

---

## 📌 **Features**

- ✅ Two independent microservices: **AuthModule** & **Dashboard**
- ✅ Each microservice has its own `docker-compose.yml` inside its directory
- ✅ `.env` file for configuration in the **AuthModule** ⚙️
- ✅ Real-time status checks for multiple APIs 🟢🟡🔴
- ✅ Authentication with JWT token handling 🔐
- ✅ Docker-ready (separate containers) 🐳
- ✅ Responsive dark theme 🌙

---

## 🛠️ **Installation & Startup**

### Requirements

- Docker 🐳  
- Docker Compose 📦  
- Node.js 🟢

### 🚀 **Build & start the microservices separately**

```bash
# Clone project
git clone https://github.com/Sternenwarte88/Unwritten-Legends-Backend.git
cd unwritten-legends

# AuthModule: Build & start
cd auth_module
docker-compose up --build

# Dashboard: Build & start
cd ../frontend_module
docker-compose up --build
```

### 💻 **Local development (separate services)**

```bash
# Start AuthModule
cd auth_module
npm install
npm run dev

# Start Dashboard
cd ../frontend_module
npm install
npm run dev
```

---

## ⚙️ **Project Structure**

### AuthModule microservice

```txt
📂 auth_module/
 ┣ 📂 config/            # DB & Redis connections
 ┣ 📂 controller/auth/   # Authentication logic
 ┣ 📂 interfaces/        # User interface types
 ┣ 📂 models/            # User model
 ┣ 📂 routes/            # Auth routes
 ┣ 📂 utilities/         # JWT helpers
 ┣ 📜 .env               # Environment variables for the AuthModule
 ┣ 📜 docker-compose.yml # Docker Compose for the AuthModule
 ┗ 📜 server.ts          # Express server
```

### Status Dashboard microservice

```txt
📂 frontend_module/
 ┣ 📂 public/            # CSS & assets
 ┣ 📂 src/
 ┃ ┣ 📂 services/        # API status checks
 ┃ ┣ 📂 views/           # EJS template
 ┃ ┗ 📜 app.ts           # Express server
 ┣ 📜 docker-compose.yml # Docker Compose for the dashboard
 ┣ 📜 Dockerfile
 ┗ 📜 tsconfig.json
```

---

## 🧩 **Important Configuration Points**

- **API endpoints:** Configure in `frontend_module/src/services/apistatus.ts`
- **EJS template:** Located in `frontend_module/src/views/index.ejs`
- **Auth database:** Configure in `auth_module/src/config/db.ts`
- **`.env` for AuthModule:** Manage important environment variables such as ports, DB URLs and JWT keys in `auth_module/.env`.
- **Docker Compose:** Separate `docker-compose.yml` files in `auth_module/` and `frontend_module/`.

---

## 📜 **License**

This project is **private** and may **not** be copied, modified, distributed or used commercially.  
Any use outside of authorized access is **strictly prohibited**.

Have fun and happy coding! 🚀😊
