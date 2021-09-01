
<h1 align="center"> 🚀 Express JS Server Deployment To Heroku 🚀</h1>


A barebones Node.js app using [Express 4](http://expressjs.com/).

See further examples on Heroku's Devcenter Node Getting started [article](https://devcenter.heroku.com/articles/getting-started-with-nodejs).

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
 git clone https://github.com/perfettiful/Express-Heroku-Deploy.git 
```
```sh
 cd Express-Heroku-Deploy
```
```sh
 npm install && npm start
```

Your app should now be running on [localhost:3001](http://localhost:3001/).

## Deploying to Heroku

```sh
 heroku create
```
```sh
 git push heroku main
```
```sh
 heroku open
```
<div align="center">

OR

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)
</div>

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)