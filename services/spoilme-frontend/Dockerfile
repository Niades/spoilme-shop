FROM node:12-alpine as build-frontend
WORKDIR /app
COPY ./yarn.lock /app/yarn.lock
COPY ./package.json /app/package.json
RUN yarn install
COPY ./ /app/
RUN yarn build
FROM nginx:latest
COPY --from=build-frontend /app/build /usr/share/nginx/html