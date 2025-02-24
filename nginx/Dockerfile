FROM node AS builder
WORKDIR /app

COPY ./src/package.json .
COPY ./src/package-lock.json .
COPY ./src/jsconfig.json .

RUN npm install
COPY ./src .
RUN npm run build

FROM nginx:latest AS production
WORKDIR /dist

COPY --from=builder /app/build .

RUN nginx -t
RUN service nginx restart
