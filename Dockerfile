ARG BASE_IMAGE=node:lts-alpine

FROM ${BASE_IMAGE}

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
COPY . .

EXPOSE 80:80
EXPOSE 443:443

CMD [ "npm", "start" ]
