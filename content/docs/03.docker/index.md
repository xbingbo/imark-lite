---
title: 部署指南
navigation:
  icon: i-lucide-file-text
---

## 下载上传

```shell
wget https://download.docker.com/linux/static/stable/x86_64/docker-25.0.0.tgz
scp -r docker-25.0.0.tgz root@192.168.0.1:/root
```

## 离线部署

```shell
tar -zxvf docker*.tgz -C /usr/local/bin --strip-components=1
cat <<EOF > /etc/systemd/system/docker.service
[Unit]
Description=Docker service
After=containerd.service
[Service]
ExecStart=/usr/local/bin/dockerd
Type=notify
Delegate=yes
KillMode=process
Restart=always
RestartSec=5
LimitNPROC=infinity
LimitCORE=infinity
TasksMax=infinity
OOMScoreAdjust=-999
[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload
systemctl enable docker
systemctl start docker

docker -v
```
