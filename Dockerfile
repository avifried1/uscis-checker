FROM node:8.3.0-alpine

# Install app dependencies
COPY index.js package.json /usr/src/app/
WORKDIR /usr/src/app/
RUN npm install

CMD [ "npm", "start" ]
