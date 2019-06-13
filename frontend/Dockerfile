FROM node:12.2.0-alpine

# Prepare app directory
WORKDIR /usr/src/app/
COPY package*.json ./

# Copy source code
COPY . .

# Start service
CMD [ "yarn", "start" ]
