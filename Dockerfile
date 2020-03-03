FROM node:13.8.0-alpine3.11 as react-build-stage

RUN mkdir -p /var/www

# change working directory to the app directory
WORKDIR /var/www

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# copy all files in current directory to working directory
COPY package.json /var/www/

# install npm
RUN apk --no-cache add g++ gcc libgcc libstdc++ linux-headers make python
RUN npm install --silent node-gyp -g
RUN npm install --silent

COPY . /var/www/

RUN npm run bundle



FROM nginx:1.17.8-alpine

COPY --from=react-build-stage /var/www/build /usr/share/nginx/html
COPY --from=react-build-stage /var/www/config/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]