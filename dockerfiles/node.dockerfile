FROM node:alpine

# Criar o diretório no conteiner
WORKDIR /usr/app

# Copiar os arquivos JSON da minha máquina para o conteiner
COPY package*.json ./
RUN npm install

# Resto da operação
COPY . .
EXPOSE 3000
CMD [ "npm", "run", "start" ]

