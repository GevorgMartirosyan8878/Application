FROM node:current

WORKDIR /app

COPY /src /app/src
COPY tsconfig.json package.json package-lock.json /app/

RUN npm install -g nodemon
RUN npm i -g typescript
RUN npm install -g ts-node
RUN npm i -g @types/node

RUN npm install

CMD npm run dev