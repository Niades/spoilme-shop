FROM node:12-alpine as build
RUN apk update
RUN apk add --no-cache alpine-sdk
RUN apk add --no-cache python2 && ln -sf python2 /usr/bin/python
RUN apk add --no-cache \
        chromium \
        harfbuzz \
        "freetype>2.8" \
        ttf-freefont \
        nss
ENV CHROME_BIN=/usr/bin/chromium-browser
WORKDIR /app
COPY package.json /app
COPY yarn.lock /app
RUN yarn install
COPY . /app
EXPOSE 3005
CMD ["node", "./index.js"]