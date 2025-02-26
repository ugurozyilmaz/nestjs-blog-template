# Image source
FROM node:12.19.0-alpine3.9

# Docker working directory
WORKDIR /app

# Copying file into APP directory of docker
COPY ./package.json ./package-lock.json /app/

# Then install the NPM module
RUN npm install

# Copy current directory to APP folder
COPY . /app/

EXPOSE 3000
CMD ["npm", "run", "start:dev"]
