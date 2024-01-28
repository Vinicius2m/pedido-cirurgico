FROM node:20 as builder

WORKDIR /home/node/backend

COPY package.json .
COPY prisma ./prisma/

RUN npm install

COPY . .

RUN npm run build

FROM node:20

COPY --from=builder /home/node/backend/dist ./dist
COPY --from=builder /home/node/backend/node_modules ./node_modules
COPY --from=builder /home/node/backend/package.json ./
COPY --from=builder /home/node/backend/prisma ./prisma

EXPOSE 8000

CMD ["npm", "run", "start:migrate:prod"]


