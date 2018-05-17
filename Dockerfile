FROM python:2.7

RUN virtualenv venv
RUN . venv/bin/activate
RUN pip install "Lektor==3.1.1"

WORKDIR /opt/lektor
CMD ["lektor", "server", "--host", "0.0.0.0"]