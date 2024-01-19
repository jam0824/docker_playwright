FROM mcr.microsoft.com/playwright:focal

WORKDIR /app

# 必要なパッケージをインストール
RUN npm update -g npm
RUN npm init -y playwright typescript ts-node && npm i -D -y @playwright/test
