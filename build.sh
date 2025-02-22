docker compose -f ../'Unwritten Legends - Mongo'/docker-compose.yml up -d --build
docker compose -f ../'Unwritten Legends - Redis'//docker-compose.yml up -d --build
docker compose -f ./AuthModule/docker-compose.yml up -d --build
docker compose -f ./Autfrontend_module/docker-compose.yml up -d --build
docker compose -f ./PlayerModule/docker-compose.yml up -d --build
docker compose -f ./RealmModule/docker-compose.yml up -d --build
docker compose -f ./RealmModule/docker-compose.yml up -d --build
