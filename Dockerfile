# Usando a imagem oficial do Node.js 18
FROM node:18

# Definindo o diretório de trabalho
WORKDIR /app

# Copiando arquivos de dependências
COPY package*.json ./

# Instalando dependências
RUN npm install --only=production && npm install

# Copiando todo o código
COPY . .

# Gerando o Prisma Client
RUN npx prisma generate

# Expondo a porta 3000 do backend
EXPOSE 3000

# Iniciar o backend em modo de desenvolvimento
CMD ["npm", "run", "start:dev"]