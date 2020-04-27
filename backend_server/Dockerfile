FROM python:3.6
MAINTAINER Y

WORKDIR /app

COPY . .

RUN mv dconfig.py config.py
RUN pip install -r requirements.txt

CMD python -u service.py
