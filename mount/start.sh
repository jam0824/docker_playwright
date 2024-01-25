#!/bin/bash

# 仮想ディスプレイを1920x1080x16で作って、後のコマンドを実行できるように&をつける
Xvfb :10 -screen 0 1920x1080x16 &
# x11vncを立ち上げてアクセスできるようにする。5910ポートでlocalhostのみ許可
x11vnc -rfbport 5910 -forever -localhost &
# websockifyでホスト側のブラウザで見れるようにする。8010ポートとlocalhostの5910をつなげている
websockify --web=/usr/share/novnc 8010 localhost:5910 &