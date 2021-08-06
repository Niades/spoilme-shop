FROM node:12-alpine as build-frontend
WORKDIR /app
COPY ./yarn.lock /app/yarn.lock
COPY ./package.json /app/package.json
RUN yarn install
COPY ./ /app/
RUN yarn build
FROM steebchen/nginx-spa:stable
COPY --from=build-frontend /app/build /app
EXPOSE 80
CMD ["nginx"]