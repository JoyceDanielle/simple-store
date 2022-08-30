FROM node:14.17.0-slim

USER node

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

CMD ["tail", "-f", "/dev/null"]