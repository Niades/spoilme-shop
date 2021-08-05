FROM node:12-alpine as build
RUN apk update
RUN apk add --no-cache alpine-sdk
RUN apk add --no-cache python2 && ln -sf python2 /usr/bin/python
ENV NODE_ENV=production
WORKDIR /app
COPY package.json /app
COPY yarn.lock /app
RUN yarn install
COPY . /app
EXPOSE 3005
CMD ["./scripts/start-server.sh"]