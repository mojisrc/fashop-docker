# fashop-docker
FaShop Docker 方便大家安装

# 目标
- 一个命令行完事

# 安装
- 想看着运行记录安装？执行：
```bash
docker-compose up 
```
> 到这就算安装完毕啦，请访问127.0.0.1:81去访问吧，提示：在本地，如果是服务器建议配置nginx 映射到 project/fashop-admin/dist目录，写法参照volumes/conf/conf.d/fashop-admin.conf
- 不想看：
```bash
docker-compose up -d
```


> TODO 如何配置域名 、证书、采用自己的数据库
#### 下次再开
```bash
docker-compose start
```

#### 
加速器地址获取：https://www.daocloud.io/mirror#accelerator-doc  拉到页面下方
# 注意
- 本教程适合用于本机测试，如果想通过域名指向，需要配置nginx
- 默认的fashop-admin（也就是后台的前端部分）请求接口域名为fashop-admin