FROM mcr.microsoft.com/playwright:focal

RUN apt-get update && apt-get -y install x11vnc websockify novnc
WORKDIR /app

# 必要なパッケージをインストール
RUN npm update -g npm
RUN npm init -y && npm i -y @playwright/test
