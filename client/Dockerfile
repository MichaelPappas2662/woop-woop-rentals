FROM node:14 as production 

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npx install --production=false

COPY . . 

RUN npx build

CMD ["node", "server.js"]