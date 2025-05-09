FROM ubuntu:latest
RUN apt-get update
RUN apt-get install -y python3
RUN apt-get install -y python3-pip
RUN apt-get install -y git
RUN apt-get install -y curl
COPY . /app

ENV APP_ENV development

RUN pip3 install flask requests numpy pandas

CMD ["python3", "/app/app.py"]

#Optimise the Dockerfile