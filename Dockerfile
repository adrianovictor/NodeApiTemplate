# Usa uma imagem do docker hub com a versão carbon do Node.js
FROM node:carbon-alpine

# Define qual diretório será usado para nossa aplicação dentro do container
# Atenção: substituir o workdir de acordo com a necessidade
WORKDIR /usr/app/node-project-template

# Copia todos os arquivos que começam com package e tem extensão .json para o diretório definido acima
COPY package*.json ./

# Instala todas as dependências declaradas no package.json
RUN npm install

# Copia todos os arquivos da raiz da nossa aplicação para a pasta deinida no WORKDIR
COPY . .

# Expõe a porta 3000 do container
EXPOSE 3000

# Roda o comando 'npm start'
CMD [ "npm", "start" ]