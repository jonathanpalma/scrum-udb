#!/bin/bash
set -o nounset -o errexit

## Setups PostgreSQL in the local environment

which docker

if [ $? -eq 0 ]
then
    docker --version | grep "Docker version"
    if [ $? -eq 0 ]
    then

      if [ "$(docker container ls -q -f name=scrum-udb-db)" ]; then
        if [ ! "$(docker container ls -aq -f status=exited -f name=scrum-udb-db)" ]; then
          echo "Stoping container..."
          docker container stop scrum-udb-db
        fi

        echo "Removing container..."
        docker container rm scrum-udb-db
      fi

      if [[ ! "$(docker images -q scrum-udb-db-img 2> /dev/null)" == "" ]]; then
        echo "Proceding to remove image..."
        docker image rm scrum-udb-db-img
      fi

    else
        echo "Please, install docker"
    fi
else
    echo "Please, install docker" >&2
fi