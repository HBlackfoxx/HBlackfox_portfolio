FROM node:lts AS runtime
WORKDIR /app

COPY . .

RUN npm install
RUN npm run build


EXPOSE 3000
CMD node ./dist/server/entry.mjs