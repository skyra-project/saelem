FROM node:14-alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./
COPY .yarnclean ./

RUN yarn install --frozen-lockfile --link-duplicates

COPY generated/api generated/api/

ENV PORT 8080

CMD ["yarn", "start"]
