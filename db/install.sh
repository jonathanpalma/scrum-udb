#!/bin/bash
set -o nounset -o errexit

## Setups PostgreSQL in the local environment

which docker

if [ $? -eq 0 ]
then
    docker --version | grep "Docker version"
    if [ $? -eq 0 ]
    then
      echo "Starting build process..."

      if [[ "$(docker images -q scrum-udb-db-img 2> /dev/null)" == "" ]]; then
        echo "Proceding to create image..."
        docker image build -t scrum-udb-db-img .
      else
        echo "Database image already exist"
      fi

      if [ ! "$(docker container ls -q -f name=scrum-udb-db)" ]; then
        if [ "$(docker container ls -aq -f status=exited -f name=scrum-udb-db)" ]; then
          echo "Starting container..."
          docker container start scrum-udb-db
        else
          echo "Creating container..."
          docker run -d --name scrum-udb-db --publish 5432:5432 -v scrum-udb-data:/var/lib/postgresql scrum-udb-db-img
        fi
      else 
        echo "Container already running"
      fi
    else
        echo "Please, install docker"
    fi
else
    echo "Please, install docker" >&2
fi