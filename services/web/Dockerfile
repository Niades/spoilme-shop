FROM node:12-alpine as build
WORKDIR /app
COPY ./showcase-frontend/yarn.lock /app/yarn.lock
COPY ./showcase-frontend/package.json /app/package.json
RUN yarn install
COPY ./showcase-frontend/ /app/
RUN yarn build
FROM nginx:1.19.6-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]