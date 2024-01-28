FROM node:20-slim

WORKDIR /home/node/frontend

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]


