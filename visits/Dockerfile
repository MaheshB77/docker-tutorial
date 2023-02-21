# Pull image that has node/npm built in
FROM node:16.17-alpine

# Make working directory
WORKDIR /usr/app

# Copy the package.json (to avoid the rebuilds)
COPY ./package.json ./

# Install the dependencies
RUN npm i

COPY ./ ./

# Start the server
CMD [ "npm", "start" ]