CART REST API, A simple REST API that allows one to persist his/her cart

## Description

The rest api is powered by NestJs, and utilizes TypeOrm to handle the Database. 

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Documentation

Documentation for the API can be found [here](https://documenter.getpostman.com/view/4443580/SVYxpb8k?version=latest).
The Database Schema can be found in /api/db

## Database Management
The Database Schema can be found in /api/db

To properly provision the Postgresql instance on heroku
  ->. Ensure heroku cli is installed
  ->. Ensure that you have Postgres 11.5 installed and a database 'cartdb' created locally.
  ->. run 
  ```bash
  heroku addons:create heroku-postgresql:hobby-dev
  ```
  ->. confirm connection via 
  ```bash
    heroku pg:psql
  ```
  ->. run the command below to push local postgresdb to heroku
  ```bash
  heroku pg:push cartdb  DATABASE_URL  --app chimeratest
  ```
   
  ->. run 
  ```bash
  'heroku pg:info'
  ``` 
  to confirm if database is working properly
  ->. Push the application to heroku to initialize the application and create the tables vie TypeOrm
  ```bash
    git push heroku master
  ```

## PERFORMANCE TESTS
Once your application has been pushed to Heroku and is running, 
  ->. Run 
  ```bash
  $ npm i -g artillery.
  ``` 
  Once done, confimr installation by running 
  ```bash
  $ artillery -V
  ```
  ->. Cd to the application folder
  ->. Run 
  ```bash
  artillery run test.yml
  ```
  ->. You can adjust the number of instances created per second via the arrivalRate setting in the test.yml file

```bash
  sample output

All virtual users finished
Summary report @ 06:46:55(+0300) 2019-08-16
  Scenarios launched:  1200
  Scenarios completed: 1198
  Requests completed:  1198
  RPS sent: 17.29
  Request latency:
    min: 632.1
    max: 11006.7
    median: 657.1
    p95: 3347.6
    p99: 4322.2
  Scenario counts:
    0: 1200 (100%)
  Codes:
    404: 1198
  Errors:
    ETIMEDOUT: 2

    ```

