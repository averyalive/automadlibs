FROM node:10-alpine

WORKDIR /usr/server
COPY . .

RUN npm install --no-interactive

EXPOSE 8080

## Add the wait script to the image
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.6.0/wait /wait
RUN chmod +x /wait

CMD /wait && node src/index.js