# Project 79

Spring Boot MVC Web project Thymeleaf, Login, Charts

[https://gitorko.github.io/spring-boot-thymeleaf/](https://gitorko.github.io/spring-boot-thymeleaf/)

### Version

Check version

```bash
$java --version
openjdk 17.0.3 2022-04-19 LTS
```

### Postgres DB

```
docker run -p 5432:5432 --name pg-container -e POSTGRES_PASSWORD=password -d postgres:9.6.10
docker ps
docker exec -it pg-container psql -U postgres -W postgres
CREATE USER test WITH PASSWORD 'test@123';
CREATE DATABASE "test-db" WITH OWNER "test" ENCODING UTF8 TEMPLATE template0;
grant all PRIVILEGES ON DATABASE "test-db" to test;

docker stop pg-container
docker start pg-container
```

### Dev

To run the code.

```bash
./gradlew clean build
./gradlew bootRun
```

### Prod

To build the uber jar & run the jar.

```bash
./gradlew clean build
cd build/libs 
java -jar project79-1.0.0.jar
```

Open [http://localhost:8080/](http://localhost:8080/)

```
user: admin
pwd: admin@123
```

### Docker

```bash
./gradlew clean build
docker build -f docker/Dockerfile --force-rm -t project79:1.0.0 .
docker images |grep project79
docker tag project79:1.0.0 gitorko/project79:1.0.0
docker push gitorko/project79:1.0.0
docker-compose -f docker/docker-compose.yml up 
```

