docker connects our machine to virtual machine to run


FROM node:7
WORkDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node server.json
EXPOSE 8888 