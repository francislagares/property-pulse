FROM node:21-alpine

RUN apk update && apk add --no-cache libc6-compat nodejs-current && corepack enable

WORKDIR /app

COPY package.json .

RUN pnpm install

COPY . .

EXPOSE 3000

CMD [ "pnpm", "dev" ]