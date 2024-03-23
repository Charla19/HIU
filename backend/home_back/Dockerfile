FROM node:iron-alpine AS home_back_build
WORKDIR /app
COPY package.json ./
RUN npm install -g npm && npm install
COPY ./ ./
RUN npm run build

FROM node:iron-alpine
WORKDIR /app
COPY --from=home_back_build /app/dist ./dist
COPY --from=home_back_build /app/node_modules ./node_modules
CMD [ "node", "dist/main" ]