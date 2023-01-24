FROM node:18.13-alpine3.16

WORKDIR /backend

COPY package*.json ./

COPY prisma ./prisma 

COPY .env ./

COPY tsconfig.json ./

RUN npm i

COPY . .

RUN npx prisma generate


EXPOSE 3000


CMD [ "npm","run","devstart" ]
