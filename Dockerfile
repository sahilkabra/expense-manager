FROM node:9

ENV PORT 9001
ENV NODE_ENV production

EXPOSE 9001

WORKDIR /src

COPY . .
RUN npm install

RUN npm run build

CMD ["node", "dist/"]
