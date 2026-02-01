# Usa una imagen base oficial de Node.js
FROM node:20-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos package*.json y package-lock*.json
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia el resto del código de la aplicación al contenedor
COPY . .

# Expone el puerto en el que se ejecuta la aplicación (por defecto 8080 para muchos ejemplos)
EXPOSE 8080

# Define el comando para ejecutar la aplicación cuando se inicie el contenedor
CMD ["npm", "start"]