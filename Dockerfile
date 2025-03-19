# Use an official Node.js runtime as the base image
FROM node:lts AS builder

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if it exists) to leverage caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the Astro project files
COPY . .

# Build the Astro project (outputs to /app/dist by default)
RUN npm run build

# Use a lightweight web server to serve the static files
FROM nginx:alpine

# Copy the built static files from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]