FROM php:8.2-apache

# Instala o driver PDO MySQL
RUN docker-php-ext-install pdo pdo_mysql

# Define o diretório de trabalho dentro do container
WORKDIR /var/www/html

# Copia todos os arquivos do projeto para dentro do container
COPY . /var/www/html

# Habilita o mod_rewrite (útil caso precise futuramente)
RUN a2enmod rewrite
