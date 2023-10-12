FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

 

 

RUN npm install

 

ENV PORT=3022

 

COPY . .

EXPOSE 3022

CMD [ "npm", "start" ]