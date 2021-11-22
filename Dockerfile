FROM node:erbium-alpine

WORKDIR /usr/src/app

RUN apk add --no-cache --virtual build-deps \
  g++ \
  git \
  make \
  python3

RUN npm install -g --silent ember-cli
COPY package*.json ./
RUN npm ci
RUN apk del build-deps

COPY . .

RUN ember build --environment=production

CMD ["node", "/usr/src/app/fastboot-server.js"]
