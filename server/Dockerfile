FROM node:21-alpine

WORKDIR /app

COPY package*.json .

RUN npm install --only=production

COPY api.js .

EXPOSE 3000

CMD ["node", "api.js"]