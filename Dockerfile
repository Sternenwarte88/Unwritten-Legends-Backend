# Basis-Image
FROM node:18

# Arbeitsverzeichnis setzen
WORKDIR /app

# Abhängigkeiten installieren
COPY package.json package-lock.json tsconfig.json ./
RUN npm install

# Code kopieren
COPY . .

# TypeScript bauen
RUN npm run build

# Port freigeben
EXPOSE 3000

# Startbefehl
CMD ["node", "dist/server.js"]
