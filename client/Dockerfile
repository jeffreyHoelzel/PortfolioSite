# build stage
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY ./src/styles/ /app/src/styles
COPY ./src/components /app/src/components
COPY ./src/utils /app/src/utils

RUN npm config set cache /app/.npm-cache

COPY . .

EXPOSE 3000
CMD ["npm", "start"]
