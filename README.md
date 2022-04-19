# project79

Spring Boot MVC Web project Thymeleaf, Login, Charts

### Postgres DB

```
docker run -p 5432:5432 --name pg-container -e POSTGRES_PASSWORD=password -d postgres:9.6.10
docker ps
docker run -it --rm --link pg-container:postgres postgres psql -h postgres -U postgres
CREATE USER test WITH PASSWORD 'test@123';
CREATE DATABASE "test-db" WITH OWNER "test" ENCODING UTF8 TEMPLATE template0;
grant all PRIVILEGES ON DATABASE "test-db" to test;
```

```bash
./gradlew clean build

docker build -f docker/Dockerfile --force-rm -t project79:1.0.0 .
docker images
docker tag project79:1.0.0 gitorko/project79:1.0.0
docker push gitorko/project79:1.0.0
docker-compose -f docker/docker-compose.yml up 
```
