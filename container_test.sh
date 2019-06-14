#!/bin/sh
set -e 

backendrun=$(docker inspect -f {{.State.Running}} backend-demo-app)
if [ "$backendrun" = "false" ]; then
   echo "backend-demo-app down, Exiting..."
   exit 1 
fi

frontrun=$(docker inspect -f {{.State.Running}} backend-demo-app)
if [ "$frontend" = "false" ]; then
   echo "frontend-demo-app down, Exiting..."
   exit 1 
fi
