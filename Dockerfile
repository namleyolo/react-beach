FROM alpine
RUN apk add --no-cache nodejs npm


MAINTAINER NAMLEE

WORKDIR /app

COPY . /app

RUN npm install 

EXPOSE 9006

ENTRYPOINT ["npm"]

CMD  ["start"]
