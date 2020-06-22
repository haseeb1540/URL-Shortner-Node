FROM node

WORKDIR E:/DND/nodeServices

ADD package.json E:/DND/onboardservices/package.json
RUN npm install

ADD . E:/DND/nodeServices

EXPOSE 8090

CMD ["node", "server.js"]