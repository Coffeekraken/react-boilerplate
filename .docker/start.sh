echo "Creating network..."
docker network create html-boilerplate-network
echo "Network created!"

# start the container
echo "Restarting docker"
docker-compose stop
docker-compose up -d
echo "Docker restarted"
