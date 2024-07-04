# Node.js образ в качестве базового
FROM node:18 AS build

# Рабочая директория
WORKDIR /app

# ...
COPY package*.json ./

# Зависимости
RUN npm install

# Файлы проекта
COPY . .

# Сборка
RUN npm run build

# Настройка ngix
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Открываем порт
EXPOSE 80

# Запуск nginx
CMD ["nginx", "-g", "daemon off;"]
