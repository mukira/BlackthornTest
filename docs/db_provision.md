To properly provision the Postgresql instance on heroku
    ->. Ensure heroku cli is installed
    ->. Ensure that you have Postgres 11.5 installed and a database 'cartdb' created locally.
    <!-- ->. Import db_schema.sql to the local database  -->
    ->. run "heroku addons:create heroku-postgresql:hobby-dev"
    ->. confirm connection via command heroku pg:psql
    ->. run heroku pg:push cartdb  DATABASE_URL  --app chimeratest to push local postgresdb to heroku
    ->. run 'heroku pg:info' to confirm if database is working properly
    ->. Run the NodeJs app to create the tables and relationships via typeOrm
    