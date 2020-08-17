FROM python:3.6
MAINTAINER Syed Adnan

WORKDIR /app

COPY . .

RUN pip install -r requirements.txt

CMD scrapy crawl news -s LOG_ENABLED=0
