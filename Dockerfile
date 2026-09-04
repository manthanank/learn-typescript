# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Bundle app source inside the docker image
COPY . .

# Build TypeScript application
RUN npm run build

# Run application
CMD [ "npm", "start" ]