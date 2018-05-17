FROM python:2.7

RUN mkdir -p /usr/src/
WORKDIR /usr/src/
COPY ./src/ /usr/src/

RUN virtualenv venv
RUN . venv/bin/activate
RUN pip install "Lektor==3.1.1"


CMD ["lektor", "server", "--host", "0.0.0.0"]