---
title: 部署指南
navigation:
  icon: i-lucide-file-text
---


## 测试服务
- 地址：http://192.168.233.107:8978/
- 账号：beaver-admin
- 密码：City#2025

![图片](https://docs.srdcloud.cn/uploader/f/zRe3VY4MOdcBWnv9.png?source=sdk&accessToken=eyJhbGciOiJIUzI1NiIsImtpZCI6ImRlZmF1bHQiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE3NjY1NjQzODIsImZpbGVHVUlEIjoiMWxxN01nWmFuZElHZ1hBZSIsImlhdCI6MTc2NjU2Mzc4MiwiaXNzIjoidXBsb2FkZXJfYWNjZXNzX3Jlc291cmNlIiwicGFhIjoic2RrOnRoaXJkOjhmZTM2Njc4LTg1YTgtNDRhYi1hZDgwLWVhZjI5MTAyMDcwMCIsInVzZXJJZCI6NDgwMjEwfQ.GZAQqUdtyU1fZYB8N3vwFR1uL2vRFBvLNAg899AaqQI)

## 部署步骤
### 下载镜像
```shell
docker pull dbeaver/cloudbeaver:latest
```

### 导出镜像
```shell
docker save dbeaver/cloudbeaver | gzip > cloudbeaver.tar.gz
```

### 导入镜像
```shell
# 上传服务器
scp -r cloudbeaver.tar.gz root@192.168.233.107:/root
# 导入镜像
docker load < cloudbeaver.tar.gz
```

### 启动服务
```shell
docker run --name cloudbeaver -d --restart unless-stopped --network host -p 8978:8978 -v /opt/cloudbeaver/workspace:/opt/cloudbeaver/workspace dbeaver/cloudbeaver:latest
```

### 初始配置

首次访问 http://192.168.233.107:8978 会进入配置向导

**配置步骤：**

1. 服务器配置
   - 服务器名称：例如 "My CloudBeaver Server"
   - 服务器 URL：保持默认或修改为实际域名
   - 会话过期时间：默认 30 分钟 
2. 管理员账号
   - 用户名：admin（建议修改）
   - 密码：设置强密码（至少 8 位，包含大小写字母和数字）
3. 访问控制
   - 建议禁用匿名访问（生产环境必须禁用）
   - 配置用户认证方式
4. 完成设置
   - 点击 "Finish" 完成配置
   - 使用管理员账号登录
5. 界面设置
   - 语言设置为『简体中文』，点击保存
## 创建连接
1. 新建连接，选择相应的驱动，如MYSQL
2. 填写主机、端口、数据库
3. 填写认证：用户名、用户密码，连接数据库使用
4. 设置服务器时区：Asia/Shanghai
5. 测试连接并创建
