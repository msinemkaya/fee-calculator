FROM node:20.8.1

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

VOLUME .:/usr/src/app

COPY . .

RUN npm run build
CMD ["npm", "run", "start:prod"]
