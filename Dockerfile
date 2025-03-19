# Use an official Node.js runtime as the base image
FROM node:20-alpine

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json for caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the Astro project for SSR
RUN npm run build

# Expose the port (default for @astrojs/node is 4321, adjust if customized)
EXPOSE 3000

# Start the Astro server
CMD ["node", "./dist/server/entry.mjs"]