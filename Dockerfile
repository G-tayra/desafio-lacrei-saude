# Dockerfile
# Use official Node.js image as the base image
FROM node:18-alpine

# Create a non-root user and group
RUN addgroup lacrei && adduser --ingroup lacrei --home /home/lacrei/app --disabled-password lacrei

# Switch to the new user to run app
USER lacrei

# Set the working directory for the application
WORKDIR /home/lacrei/app

# Copy package.json and package-lock.json
COPY --chown=lacrei:lacrei package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy application files to the container
RUN mkdir src
COPY --chown=lacrei:lacrei src/*.js /home/lacrei/app/src

# Expose the port your app runs on
EXPOSE 3000

# Command to run the Node.js app
CMD ["npm", "start"]

