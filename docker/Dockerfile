FROM ubuntu

MAINTAINER "Carlos H Brandt <carloshenriquebrandt-gmail>"

RUN apt-get update \
    && apt-get install -y \
      curl \
      git \
      gnupg2 \
      vim \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

RUN curl https://install.meteor.com/ | sh

RUN useradd -m -u 1000 -g 100 user

RUN cd /opt \
    && git clone https://github.com/chbrandt/maps-viewer.git \
    && chown -Rh user: maps-viewer

USER user

RUN cd /opt/maps-viewer/app \
    && meteor npm install --save
    # && meteor build --server-only ../build

EXPOSE 3000

WORKDIR cd /opt/maps-viewer/app

ENTRYPOINT cd /opt/maps-viewer/app && meteor run --settings settings.dev.json || meteor run --settings settings.dev.json
