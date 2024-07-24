FROM node:20
WORKDIR /opt/categories
COPY  . ./
COPY package*.json .
EXPOSE 3000
CMD [ "sleep", "infinity" ]