FROM node:12-alpine as build
WORKDIR /app
COPY ./spoilme-frontend/yarn.lock /app/yarn.lock
COPY ./spoilme-frontend/package.json /app/package.json
RUN yarn install
COPY ./spoilme-frontend/ /app/
RUN yarn build
FROM nginx:1.19.6-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY ./web/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]