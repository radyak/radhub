ARG BASE_IMAGE=node:8

FROM ${BASE_IMAGE}

COPY ./qemu-arm-static /usr/bin/qemu-arm-static

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
COPY . .

EXPOSE 80:80
EXPOSE 443:443

CMD [ "npm", "start" ]
