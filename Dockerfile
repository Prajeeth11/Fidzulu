[11:29] S Prasad, Srinidhi

FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

 

 

RUN npm install

 

ENV PORT=3021

 

COPY . .

EXPOSE 3021

CMD [ "npm", "start" ]