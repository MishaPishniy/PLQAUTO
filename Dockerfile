FROM mcr.microsoft.com/playwright:v1.56.1-noble

WORKDIR /playwright-tests

COPY . .

RUN npm install

CMD ["npm", "test"]