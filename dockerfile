FROM node:18-slim

# Set working directory
WORKDIR /app

# Copy package files first (better for caching)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Set the correct working directory if your entry file is inside "customer"
RUN npm run build

# Expose port
EXPOSE 3000

# Healthcheck to ensure the app is running
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 CMD curl -f http://localhost:3000/ || exit 1

# Start the app
CMD ["npm", "start"]
