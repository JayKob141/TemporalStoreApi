# TemporalStoreApi
An exercise of express api (shop-cart api)

# Start the project (docker with docker-compose)

Just run **docker-compose up -d**  on a terminal.

# Start the project (docker without docker-compose)
Just run the **without-docker-compose** script.

# Run the tests 
docker exec storeapiexpress npm run test-core 

docker exec storeapiexpress npm run test-api

docker exec storeapiexpress npm run test-db

# Explanation
The project is divided in 4 main categories
-   core
-   express (api)
-   presenter (layer)
-   sequelize

The core contains all the logic business, rules, etc. It should be written with minimal dependencies.

The presenter layer responds to api calls by coordinating the core and the data access to the db.  

express contains the api endpoints and it concerns framework specific features (like authentication).

sequelize allows data access to the database. 
