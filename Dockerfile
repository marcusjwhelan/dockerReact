# -------------- Stage 1 --------------------------
# very specific versions
FROM node:14.15.1-alpine3.11 as react-build-stage

# change working directory to the app directory
WORKDIR /var/www

# copy all files in current directory to working directory
COPY package.json /var/www/

# install items needed on alpine linux for npm to install modules correctly
RUN apk --no-cache add g++ gcc libgcc libstdc++ linux-headers make python

# install node-gyp -system specific and needs to be installed before modules
RUN npm install --silent node-gyp -g

# install package.json modules
RUN npm install --silent

# copy all currently made items into /var/www
COPY . /var/www/

# build artifact
RUN npm run bundle


# -------------- Stage 2 --------------------------
# specific nginx version
FROM nginx:1.19.5-alpine

# copy the build artifact from stage 1 into the served directory of nginx
COPY --from=react-build-stage /var/www/build /usr/share/nginx/html

# copy your custom nginx.conf to the default
COPY --from=react-build-stage /var/www/config/nginx.conf /etc/nginx/conf.d/default.conf

# run this command on run
CMD ["nginx", "-g", "daemon off;"]