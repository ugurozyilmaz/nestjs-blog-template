# BLOG

### Description

A simple Blog application under Docker environment.
* NestJS
* TypeORM
* PostgreSQL
* Swagger
* Docker

## Running the app on docker
### Docker build & start

```bash
# copy env file
$ cp env-example .env

# docker env build
$ docker-compose build

# docker env start
$ docker-compose up

# remove docker container (services & networks)
$ docker-compose down
```
### Migration

```bash
# generate migration
$ docker-compose run nestjs npm run typeorm:generate AnyNameYouLike

# run migration
$ docker-compose run nestjs npm run typeorm:run
```

### Seed

```bash
# run seeds
$ docker-compose run nestjs npm run seeds seed
```
