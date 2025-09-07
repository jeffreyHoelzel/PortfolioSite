ARG NODE_VERSION=20-alpine

# hot reload developement stage
FROM node:${NODE_VERSION} AS dev
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci || npm install
COPY . .

EXPOSE 3000
CMD ["npm", "run", "dev"]

# build stage
FROM node:${NODE_VERSION} AS build
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci || npm install
COPY . .

RUN npm run build && cp public/index.html dist/index.html

# production stage
FROM nginx:alpine AS prod
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
