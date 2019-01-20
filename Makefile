DOCKER_IMG=wesovilabs/graphql-movies:local

DOCKER_RUN=docker-compose run -p7000:7000 app
DOCKER_DEV=docker-compose run -p7000:7000 code
DOCKER_CLEAN=docker-compose down -v --rmi local
DOCKER_BUILD=docker build -t=${DOCKER_IMG} .
LOCAL= npm run dev
build:
	$(DOCKER_BUILD)
run: build ;
	$(DOCKER_RUN)
dev: ;
	$(DOCKER_DEV)
clean:
	$(DOCKER_CLEAN)
local:
	APP_CONFIG_DIR=./config NODE_ENV=local npm run dev
