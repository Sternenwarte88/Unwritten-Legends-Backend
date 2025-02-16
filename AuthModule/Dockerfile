# Use a Node.js base image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package.json ./

# Install ALL dependencies (including devDependencies)
RUN npm install

# Copy the rest of the app
COPY . .

RUN  npm rebuild bcrypt --build-from-source

# Ensure ts-node is available globally
RUN npm install -g ts-node

# Expose port 3000
EXPOSE 3000

# Default command
CMD ["npm", "run", "dev"]
