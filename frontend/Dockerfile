FROM node:14
COPY . ./frontend/
WORKDIR /frontend
COPY package.json yarn.lock ./frontend/
RUN yarn install
CMD ["yarn", "start"]
