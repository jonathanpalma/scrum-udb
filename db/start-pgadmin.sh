#!/bin/bash
set -o nounset -o errexit

## Setups PostgreSQL in the local environment

which docker

if [ $? -eq 0 ]
then
    docker --version | grep "Docker version"
    if [ $? -eq 0 ]
    then
      echo "Starting docker container..."
      docker run -p 5050:80 -e 'PGADMIN_DEFAULT_EMAIL=tanpalma04@gmail.com' -e 'PGADMIN_DEFAULT_PASSWORD=a12345678' -d  dpage/pgadmin4
    else
        echo "Please, install docker"
    fi
else
    echo "Please, install docker" >&2
fi