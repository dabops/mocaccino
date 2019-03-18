[![CircleCI](https://circleci.com/gh/dabops/mocaccino.svg?style=svg)](https://circleci.com/gh/dabops/mocaccino)

# Mocaccino

> Your best admin of gamers that allow you to take coffes

## How to Play with it

### As application

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate

```

### As Docker

``` bash
# Build the Docker image
$ docker build -t dabops/mocaccino .

# Let's run the image in a container
docker run -it -p 8080:80 --rm --name mocaccino dabops/mocaccino

```
