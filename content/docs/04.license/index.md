---
title: 快速开始
navigation:
  icon: i-lucide-file-text
---

通过该组件可以控制应用使用期限

## 管理后台

- 可以维护客户、产品、签发机构和许可证
- 测试环境：`http://192.168.233.107:8200/license`

## 添加依赖

```xml
<dependency>
  <groupId>com.ibingbo</groupId>
  <artifactId>license-spring-boot-starter</artifactId>
  <version>1.0.0</version>
</dependency>
```

## 添加配置

```yaml
# application.yaml
license:
  #基础配置
  #开关
  enabled: true
  #公钥
  public-key: MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8A...
  #激活码存储路径
  storage-path: /data/app/license.dat
  #启动校验
  validate-on-startup: true
  #过期是否允许启动
  allow-start-when-expired: false
  #API配置
  enable-api: true
  #API前缀
  api-prefix: /api/license
  #过期提醒天数
  expiry-warning-days: 30
  #是否启用License拦截器
  enable-interceptor: true
  #排除拦截的URL模式
  exclude-url-patterns: /api/license/**
  #需要拦截的URL模式
  intercept-url-patterns: /**
```

## 客户端相关接口

### 许可证激活接口

```shell
POST /api/license/activate
{
    "activationCode": "AAABS 3siZX hwaXJ 5RGF0 ZSI6I jIwMj YtMDE tMDEi"
}
```

### 许可证状态接口

```shell
GET /api/license/status
```

### 许可证信息接口

```shell
GET /api/license/info
```
