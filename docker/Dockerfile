FROM public.ecr.aws/m8n7w3l2/fretehub:ubuntu-20.04

ENV NODE_VERSION=16.6.2
ENV YARN_VERSION=1.22.17
ENV TZ=America/Sao_Paulo

COPY docker/install.sh /install.sh
RUN /install.sh && rm /install.sh

RUN apt-get install -y \
  cmake \
  g++ \
  git \
  jq \
  moreutils

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY docker/development/nginx.conf /etc/nginx/sites-enabled/default
COPY docker/development/supervisord.conf /opt/run/supervisord.conf

WORKDIR /opt/run

CMD ["supervisord", "-c", "supervisord.conf"]
