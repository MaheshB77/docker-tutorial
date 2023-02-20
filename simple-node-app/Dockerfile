# Pull image that has node/npm built in
FROM node:16.17-alpine

# Make working directory
WORKDIR /usr/app

# Copy the required files into the container
COPY . .

# Install the dependencies
RUN npm i

# Start the server
CMD [ "npm", "start" ]