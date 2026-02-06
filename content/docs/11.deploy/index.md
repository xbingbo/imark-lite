---
title: 部署指南
navigation:
  icon: i-lucide-file-text
---


## 测试服务
- 地址：http://192.168.233.107:9300
- 账号：admin
- 密码：City@2025


## 部署步骤
### 下载镜像
```shell
docker pull mariadb:10.8.2
docker docker pull openspug/spug-service:latest
```

### 导出镜像
```shell
docker save mariadb:10.8.2 | gzip > mariadb.tar.gz
docker save openspug/spug-service:latest | gzip > spug-service.tar.gz
```

### 导入镜像
```shell
# 上传服务器
scp -r mariadb.tar.gz root@192.168.233.107:/opt/spug/
scp -r spug-service.tar.gz root@192.168.233.107:/opt/spug/
# 导入镜像
docker load < mariadb.tar.gz
docker load < spug-service.tar.gz
```

### 构建配置

```yaml
version: "3.3"
services:
  db:
    image: mariadb:10.8.2
    container_name: spug-db
    restart: always
    command: --port 3306 --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci
    volumes:
      - /data/spug/mysql:/var/lib/mysql
    environment:
      - MYSQL_DATABASE=spug
      - MYSQL_USER=spug
      - MYSQL_PASSWORD=spug.cc
      - MYSQL_ROOT_PASSWORD=spug.cc
  spug:
    image: openspug/spug-service
    container_name: spug
    privileged: true
    restart: always
    volumes:
      - /data/spug/service:/data/spug
      - /data/spug/repos:/data/repos
    ports:
      # 如果80端口被占用可替换为其他端口，例如: - "8000:80"
      - "80:80"
    environment:
      - MYSQL_DATABASE=spug
      - MYSQL_USER=spug
      - MYSQL_PASSWORD=spug.cc
      - MYSQL_HOST=db
      - MYSQL_PORT=3306
    depends_on:
      - db
```

### 启动服务
```shell
docker compose up -d
```

### 初始账号

创建一个用户名为`admin`，密码为`City@2025`的管理员账户，可自行替换管理员账户/密码。

```shell
docker exec spug init_spug admin City@2025
```

### 测试访问

访问`http://192.168.233.107:9300`，输入刚刚创建的管理员账户/密码即可进入系统。

## 使用指南

1. 主机管理
    - 添加主机
2. 批量执行
    - 文件分发：上传文件到指定主机的指定路径，如果没有rsync则需要先安装`rsync --version`、`yum install -y rsync`
    - 模板管理：创建和管理脚本模板，如初始化应用目录`mkdir -p $HOME/.release/ctdi-example-app`
    - 执行任务：运行脚本模板或命令
3. 应用发布：
    - 发布配置：配置指定应用在某环境下如何执行发布，这里可自定义发布，即负责按顺序依次执行记录的动作。如服务部署`ln -sfn \
      $HOME/.release/ctdi-example-app/ctdi-example-app-bff-$SPUG_RELEASE.jar \
      $HOME/work/ctdi-example-app-bff.jar`和重启服务`systemctl restart ctdi-example-app-bff.service`
    - 发布申请：创建和执行发布，选择环境、主机、版本执行操作。
4. 任务计划
    - 维护一些周期性的任务
