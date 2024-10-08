# Usando a imagem oficial do Node.js 18
FROM node:18

# Definindo o diretório de trabalho
WORKDIR /app

# Instalando a CLI do NestJS globalmente e ts-node
RUN npm install -g @nestjs/cli ts-node

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

# Adicionando comando para rodar as migrations e seeds ao iniciar
CMD ["sh", "-c", "if [ ! -f /app/database/dev.db ]; then npx prisma migrate deploy && npx ts-node prisma/seed.ts; fi && npm run start:dev"]