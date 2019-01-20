FROM node:11.6.0

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
