FROM node:lts-alpine

WORKDIR /usr/src/app

RUN apk update
RUN apk add git
RUN npm install -g --silent ember-cli

COPY package*.json ./
RUN npm ci --silent

COPY . .

RUN ember build --environment=production

CMD ["node", "/usr/src/app/fastboot-server.js"]
