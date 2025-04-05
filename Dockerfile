FROM node:20.17.0-slim AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

RUN mkdir -p /var/www/html

RUN cp -r dist/* /var/www/html

FROM nginx:latest

COPY nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=build /var/www/html /usr/share/nginx/html
