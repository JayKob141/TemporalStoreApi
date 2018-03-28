#!/bin/bash

NETWORK_SHOP_API=network-shop-api
docker network create $NETWORK_SHOP_API
docker run -d --network="$NETWORK_SHOP_API" --name storeapi-express-2 -e "NODE_ENV=dockerized2" --volume="$PWD:/opt/shop-api-2" -v "$PWD/initial.sh:/usr/local/bin/initial.sh"  -w="/opt/shop-api-2" -p="3007:3000" node:9.9.0 "./initial.sh"
docker run -d --network="$NETWORK_SHOP_API" --name storeapi-db-2 -e "POSTGRES_PASSWORD=example" postgres:10.3

