# Usa una imagen base de Node.js
FROM node:14

# Crea el directorio de trabajo en el contenedor
WORKDIR /app
# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia todo el contenido de la carpeta actual a /usr/src/app dentro del contenedor
COPY . .

# Expone el puerto 3000
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "src/app.js"]
