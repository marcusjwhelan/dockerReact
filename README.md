Build docker file to run

build production and test
```bash
docker build -t react-prod-tag .
# run dockerfile
docker run -p 80:80 react-prod-tag
```

Build and run dev
```bash
# --no-cache optional after build if errors
docker build -f Dockerfile.dev -t react-dev-tag .
# run dev container
docker run -v ${PWD}:/var/www -v /var/www/node_modules -p 3000:3000 -ti --rm --name dev-react-name react-dev-tag
# visit localhost 3000 to view live reloading :D
# Windows
docker run -v "%cd%":/var/www -v /var/www/node_modules -p 3000:3000 -ti --rm --name dev-react-name react-dev-tag
```
### Run without docker
```bash
npm run start
```

### Or better yet run it in Compose

docker compose
```bash
docker-compose -f docker-compose-dev.yml up --build
# or 
npm run compose_start
```
Then you can access it at `localhost:3000`