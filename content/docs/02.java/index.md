---
title: 部署指南
navigation:
  icon: i-lucide-file-text
---

## 下载上传

```shell
wget https://download.java.net/java/GA/jdk21/fd2272bbf8e04c3dbaee13770090416c/35/GPL/openjdk-21_linux-x64_bin.tar.gz
scp -r openjdk-21_linux-x64_bin.tar.gz root@192.168.0.1:/root
```

## 离线部署

```shell
mkdir -p /opt/java
tar -zxvf openjdk*.tar.gz -C /opt/java --strip-components=1
/opt/java/bin/java -version
```
