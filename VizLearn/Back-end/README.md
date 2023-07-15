# power-trac-api

after clone this project to your computer, run following commands to install project

```bash
$ npm install
```
Please make sure latest **Node 12+ LTS** and **NPM 6+** are installed.

use `$ sudo npm install` if you're on a mac.

## Run Application in Local Env ( if local DB setup)

```
$ npm run start:local
```

## Run Application in Development Env

```
$ npm run start:dev
```
OR
```
$ node server.js --development
```

## Run Application in Production Env

```
$ npm run start:prod
```
OR
```
$ node server.js --prod
```

## .ENV Setup

To setup .env just copy .env.example file and remove .example from that file and put your all data which you want to set in that .env file
