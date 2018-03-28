# TemporalStoreApi
An exercise of express api (shop-cart api)

# Start the project (docker with docker-compose, the prefered way)

Just run **docker-compose up -d**  on a terminal.

# Start the project (docker without docker-compose)
Just run the **without-docker-compose.sh** script. and replace 
-   "storeapidb" with "storeapi-db-2" 
-   "storeapiexpress" with "storeapi-express-2" 

in the rest of the commands of this document. 

# Get sample tokens
Execute the next line to obtain two example users with tokens for authentication requests. It is required for all the endpoints of this project.

```bash
docker exec storeapidb psql -c "SELECT * FROM \"Users\";" -U postgres
```

# Make an api call
The following example command makes a request to the api.

```bash
curl -X POST -d '{"codes":["PANTS","TSHIRT"]}' -H  "Authorization: Bearer 66628dd626ebd4e423639e423583f07653df4a7cb7b747c178c1b09c66dea844" -H "Content-Type: application/json" http://127.0.0.1:3000/api/checkout
```

The body of the request contains a JSON object that contains a field named "codes" that represents the list of codes that the user wants to checkout.

The products from the specification of the problem are in the next table:

```bash
Code         | Name         |  Price
-------------------------------------------------
PANTS        | Pants        |   $5.00
TSHIRT       | T-Shirt      |  $20.00
HAT          | Hat          |   $7.50
```

The previous example request responses:
```bash
{"total":25}
```

# Run the tests 
Run tests for each part of the project by executing each line below:

```bash
docker exec storeapiexpress npm run test-core 

docker exec storeapiexpress npm run test-api

docker exec storeapiexpress npm run test-db
```

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
