FROM node:14-alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --frozen-lockfile --no-bin-links --link-duplicates

COPY generated/api generated/api/

ENV PORT 8080

CMD ["yarn", "start"]
