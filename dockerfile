# specify the node base image with your desired version node:<version>
FROM node:14 AS build
USER root
 
WORKDIR /app
COPY . /app/
RUN npm install
RUN npm run build

USER node
ARG Port=5000

CMD npm run start

EXPOSE 5000
