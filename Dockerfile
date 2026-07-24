FROM dimitri/pgloader

USER root

RUN apt-get update && apt-get install -y ca-certificates \
    && update-ca-certificates

USER postgres