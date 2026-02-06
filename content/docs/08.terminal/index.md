---
title: 部署指南
navigation:
  icon: i-lucide-file-text
---


### 下载安装

```shell
wget https://github.com/tsl0922/ttyd/releases/latest/download/ttyd.x86_64
chmod +x ttyd.x86_64
sudo mv ttyd.x86_64 /usr/local/bin/ttyd

# 验证安装
ttyd --version
```
### 服务配置

创建服务文件：/etc/systemd/system/ttyd.service

```yaml
[Unit]
Description=ttyd Web Terminal
After=network.target

[Service]
Type=simple
User=ttyd
Group=ttyd
WorkingDirectory=/home/ttyd
ExecStart=/usr/local/bin/ttyd  -p 9800 -W -c user:pwd /bin/bash

StandardOutput=journal
StandardError=journal
Restart=always
RestartSec=1

# 资源限制
LimitNOFILE=65536
MemoryLimit=512M
CPUQuota=100%

[Install]
WantedBy=multi-user.target


```
### 启动服务

```shell
# 重载配置
sudo systemctl daemon-reload

# 启动服务
sudo systemctl start ttyd

# 开机自启
sudo systemctl enable ttyd

# 查看状态
sudo systemctl status ttyd

# 查看日志
sudo journalctl -u ttyd -f

```


### 登录访问

- 地址：`http://192.168.233.107:9800`
- 账号：`admin`
- 密码：`City@2025`

