FROM node:16-alpine
RUN apk add --no-cache nodejs npm
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8090
ENTRYPOINT ["npm", "run"]
CMD ["start"]