FROM node:lts-alpine

WORKDIR /usr/src/app

RUN apk update
RUN apk add git

RUN apk add --no-cache --virtual .gyp \
  python \
  make \
  g++

RUN npm install -g --silent ember-cli
COPY package*.json ./
RUN npm ci --silent
RUN apk del .gyp

COPY . .

RUN ember build --environment=production

CMD ["node", "/usr/src/app/fastboot-server.js"]
