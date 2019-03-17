# Pull an LTS Alpine linux (~5MB) environment with
# Node already install on it.
FROM node:lts-alpine

# Create the folder "app" under /usr/src/
# We add a "/" after "app" to specify the type of
# app (ie: a folder)
RUN mkdir -p /usr/src/app/

# We specify the newly created folder app that
# it's where our command should be executed
WORKDIR /user/src/app/

# We copy the package.json in the "app" folder
COPY package.*json /user/src/app/

# We install our dependencies
RUN npm install

# Security reason
RUN npm i npm@latest

# We copy our project in the "app" folder
COPY . .

# build app for production with minification
RUN npm run build

# We expose to our docker environment (network) the port
# we are using within the application. (ie 80)
EXPOSE 80

# We specify how we start our application
# CF package.json
CMD [ "npm", "start" ]
