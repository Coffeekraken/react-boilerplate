# base image to use
FROM php:7.2-apache

# add the working directory
ADD . /var/www/html
WORKDIR /var/www/html

# ensure permissions
RUN chown -R www-data:www-data /var/www \
  && chmod -R g+w /var/www

# install packages
RUN apt-get update \
	&& apt-get install zip unzip sudo git zlib1g-dev libfreetype6-dev libjpeg62-turbo-dev libpng-dev -y

# Install GD
RUN docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/
RUN docker-php-ext-install gd

# enable some extensions
RUN sudo a2enmod rewrite
RUN	sudo a2enmod expires
RUN	sudo a2enmod headers
