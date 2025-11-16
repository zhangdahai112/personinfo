# 前后端分离部署指南

## 🎯 路径配置

所有前端路由都基于 `/personinfo/` 路径：

- 首页：`https://your-domain.com/personinfo/`
- 问卷：`https://your-domain.com/personinfo/questionnaire/`
- 查询：`https://your-domain.com/personinfo/search/`
- API：`https://your-domain.com/personinfo/api/`

## 🚀 构建前端

### 1. 配置后端 API 地址

创建 `.env.production` 文件：

```bash
NEXT_PUBLIC_API_URL=http://localhost:8080/personinfo/api
```

生产环境：
```bash
NEXT_PUBLIC_API_URL=https://your-domain.com/personinfo/api
```

### 2. 执行构建

```bash
cd frontend
npm run build
```

构建完成后，静态文件在 `out/` 目录。

## 📁 部署到 Web 服务器

### Nginx 配置示例

#### 方案 1：同域名部署（推荐）

前后端都在同一个域名下：

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/html;

    # 前端静态文件
    location /personinfo {
        alias /var/www/html/personinfo;
        try_files $uri $uri/ $uri.html /personinfo/index.html;
    }

    # 后端 API 代理
    location /personinfo/api/ {
        proxy_pass http://localhost:8080/personinfo/api/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

**部署命令**：
```bash
# 创建目录
sudo mkdir -p /var/www/html/personinfo

# 复制文件
sudo cp -r out/* /var/www/html/personinfo/

# 重启 Nginx
sudo systemctl restart nginx
```

**访问地址**：
- 前端：`http://your-domain.com/personinfo/`
- API：`http://your-domain.com/personinfo/api/`

#### 方案 2：分离域名部署

前端和后端使用不同域名：

**前端 Nginx 配置**：
```nginx
server {
    listen 80;
    server_name app.your-domain.com;
    root /var/www/html/personinfo;

    location /personinfo {
        try_files $uri $uri/ $uri.html /personinfo/index.html;
    }
}
```

**后端 Nginx 配置**（或直接访问后端服务器）：
```nginx
server {
    listen 80;
    server_name api.your-domain.com;

    location /personinfo/api/ {
        proxy_pass http://localhost:8080/personinfo/api/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

**环境变量配置**：
```bash
# .env.production
NEXT_PUBLIC_API_URL=https://api.your-domain.com/personinfo/api
```

### Apache 配置示例

```apache
<VirtualHost *:80>
    ServerName your-domain.com
    DocumentRoot /var/www/html

    # 前端静态文件
    Alias /personinfo /var/www/html/personinfo
    <Directory /var/www/html/personinfo>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
        
        # URL 重写
        RewriteEngine On
        RewriteBase /personinfo/
        RewriteRule ^index\.html$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /personinfo/index.html [L]
    </Directory>

    # 后端 API 代理
    ProxyPass /personinfo/api/ http://localhost:8080/personinfo/api/
    ProxyPassReverse /personinfo/api/ http://localhost:8080/personinfo/api/
</VirtualHost>
```

## 🔧 后端配置

确保 Spring Boot 的 `application.properties` 已配置：

```properties
server.servlet.context-path=/personinfo
server.port=8080
```

### CORS 配置

如果前后端分离部署，需要配置 CORS（已在 `CorsConfig.java` 中配置）：

```java
// 更新允许的源
config.addAllowedOrigin("https://your-frontend-domain.com");
```

## 📝 Windows 部署（IIS）

### 1. 安装 URL Rewrite 模块

下载并安装：https://www.iis.net/downloads/microsoft/url-rewrite

### 2. 部署静态文件

```cmd
xcopy /E /I /Y out\* C:\inetpub\wwwroot\personinfo\
```

### 3. 创建 web.config

在 `C:\inetpub\wwwroot\personinfo\` 下创建 `web.config`：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <system.webServer>
        <rewrite>
            <rules>
                <rule name="React Routes" stopProcessing="true">
                    <match url=".*" />
                    <conditions logicalGrouping="MatchAll">
                        <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
                        <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
                    </conditions>
                    <action type="Rewrite" url="/personinfo/index.html" />
                </rule>
            </rules>
        </rewrite>
        <staticContent>
            <mimeMap fileExtension=".json" mimeType="application/json" />
        </staticContent>
    </system.webServer>
</configuration>
```

## ✅ 验证部署

### 1. 检查前端访问

访问：`http://your-domain.com/personinfo/`

### 2. 检查 API 连接

打开浏览器开发者工具（F12），查看 Network 标签，确认：
- API 请求正确发送到 `/personinfo/api/*`
- 没有 CORS 错误
- 没有 404 错误

### 3. 测试路由

直接访问子页面：
- `http://your-domain.com/personinfo/questionnaire/`
- `http://your-domain.com/personinfo/search/`

刷新页面应该正常工作，不会出现 404。

## 🐛 常见问题

### 问题 1：静态资源 404

**症状**：`_next/static/` 文件返回 404

**解决方案**：
- 确保 web 服务器正确配置了 `/personinfo/` 的 alias 或 root
- 检查文件权限：`chmod -R 755 /var/www/html/personinfo`

### 问题 2：刷新页面出现 404

**症状**：直接访问 `/personinfo/questionnaire/` 返回 404

**解决方案**：
- Nginx：配置 `try_files $uri $uri/ /personinfo/index.html;`
- Apache：启用 mod_rewrite 并配置 .htaccess
- IIS：安装 URL Rewrite 模块并配置 web.config

### 问题 3：API 调用失败

**症状**：前端无法访问后端 API

**解决方案**：
1. 检查 `.env.production` 中的 `NEXT_PUBLIC_API_URL` 配置
2. 确认后端 `server.servlet.context-path=/personinfo`
3. 检查 CORS 配置，确保允许前端域名
4. 检查防火墙是否开放了 8080 端口

### 问题 4：样式丢失

**症状**：页面显示但没有样式

**解决方案**：
- 检查浏览器控制台是否有 CSS 加载错误
- 确认 `basePath: '/personinfo'` 已正确配置
- 清除浏览器缓存

## 📊 目录结构

部署后的目录结构：

```
/var/www/html/personinfo/
├── _next/
│   └── static/
│       ├── chunks/
│       └── css/
├── index.html
├── questionnaire.html
├── search.html
└── ...
```

## 🔗 相关配置文件

- 前端配置：`frontend/next.config.js`
- API 配置：`frontend/src/lib/api-config.ts`
- 环境变量：`frontend/.env.production`
- 后端配置：`server/src/main/resources/application.properties`
- CORS 配置：`server/src/main/java/com/server/config/CorsConfig.java`

## 📞 测试命令

```bash
# 本地测试构建结果
cd frontend
npm run build
npx serve out

# 访问 http://localhost:3000/personinfo/
```
