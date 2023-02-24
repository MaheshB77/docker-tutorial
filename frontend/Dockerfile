# Step 1 (build the project)
FROM node:alpine as builder
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build


# Step 2 (serve the build to nginx)
FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html