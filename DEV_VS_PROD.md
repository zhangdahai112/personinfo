# 开发环境 vs 生产环境配置说明

## 🎯 路径配置策略

本项目采用**环境感知路径配置**，开发和生产环境使用不同的路径：

| 环境 | 前端路径 | 后端API路径 |
|------|---------|------------|
| **开发** | `http://localhost:3000/` | `http://localhost:8080/api/` |
| **生产** | `http://your-domain.com/personinfo/` | `http://your-domain.com/personinfo/api/` |

## 📁 配置文件

### 1. 前端配置 ([next.config.js](file://c:\Users\Administrator\Desktop\personinfo\frontend\next.config.js#L9-L9))

```javascript
basePath: process.env.NODE_ENV === 'production' ? '/personinfo' : ''
```

- **开发环境** (`npm run dev`): `basePath = ''` (根路径)
- **生产环境** (`npm run build`): `basePath = '/personinfo'`

### 2. API 配置 ([api-config.ts](file://c:\Users\Administrator\Desktop\personinfo\frontend\src\lib\api-config.ts#L8-L24))

```typescript
const isDevelopment = process.env.NODE_ENV === 'development'
return isDevelopment 
  ? 'http://localhost:8080/api'
  : 'http://localhost:8080/personinfo/api'
```

### 3. 后端配置

#### 生产环境 ([application.properties](file://c:\Users\Administrator\Desktop\personinfo\server\src\main\resources\application.properties#L6-L6))
```properties
server.servlet.context-path=/personinfo
```

#### 开发环境 ([application-dev.properties](file://c:\Users\Administrator\Desktop\personinfo\server\src\main\resources\application-dev.properties#L5-L5))
```properties
# No context path (root)
```

## 🚀 使用方法

### 开发环境

#### 启动后端（开发模式）
```bash
cd server
.\gradlew.bat bootRun --args='--spring.profiles.active=dev'
```

**访问地址**：
- API: `http://localhost:8080/api/submit`
- Swagger (if enabled): `http://localhost:8080/swagger-ui.html`

#### 启动前端（开发模式）
```bash
cd frontend
npm run dev
```

**访问地址**：
- 首页: `http://localhost:3000/`
- 问卷: `http://localhost:3000/questionnaire/`
- 查询: `http://localhost:3000/search/`

### 生产环境

#### 构建前端
```bash
cd frontend
npm run build
```

**输出目录**: `frontend/out/`
**所有路径自动添加 `/personinfo/` 前缀**

#### 启动后端（生产模式）
```bash
cd server
.\gradlew.bat bootRun
# 或
java -jar build/libs/server.jar
```

**访问地址**：
- API: `http://localhost:8080/personinfo/api/submit`

#### 部署前端
```bash
# Windows
xcopy /E /I /Y out\* C:\inetpub\wwwroot\personinfo\

# Linux
sudo cp -r out/* /var/www/html/personinfo/
```

**访问地址**：
- 首页: `http://your-domain.com/personinfo/`
- 问卷: `http://your-domain.com/personinfo/questionnaire/`

## 📊 路径对比表

### 开发环境路径

| 页面 | 前端URL | API调用 |
|------|---------|---------|
| 首页 | `http://localhost:3000/` | `http://localhost:8080/api/*` |
| 问卷 | `http://localhost:3000/questionnaire/` | `http://localhost:8080/api/submit` |
| 查询 | `http://localhost:3000/search/` | `http://localhost:8080/api/getById` |

### 生产环境路径

| 页面 | 前端URL | API调用 |
|------|---------|---------|
| 首页 | `http://your-domain.com/personinfo/` | `http://your-domain.com/personinfo/api/*` |
| 问卷 | `http://your-domain.com/personinfo/questionnaire/` | `http://your-domain.com/personinfo/api/submit` |
| 查询 | `http://your-domain.com/personinfo/search/` | `http://your-domain.com/personinfo/api/getById` |

## 🔧 环境变量覆盖

### 前端环境变量

可以通过 `.env.local` (开发) 或 `.env.production` (生产) 覆盖默认配置：

```bash
# .env.local (开发环境)
NEXT_PUBLIC_API_URL=http://localhost:8080/api

# .env.production (生产环境)
NEXT_PUBLIC_API_URL=https://api.your-domain.com/personinfo/api
```

### 后端环境变量

```bash
# 开发环境
java -jar server.jar --spring.profiles.active=dev

# 生产环境
java -jar server.jar --spring.profiles.active=prod
```

## ✅ 验证配置

### 开发环境验证

1. 启动后端（dev profile）
2. 启动前端 `npm run dev`
3. 访问 `http://localhost:3000/`
4. 打开浏览器开发者工具，Network 标签
5. 检查 API 请求是否指向 `http://localhost:8080/api/*`

### 生产环境验证

1. 构建前端 `npm run build`
2. 检查 `out/index.html` 中的链接，应包含 `/personinfo/` 前缀
3. 部署并访问
4. 检查 API 请求是否指向 `/personinfo/api/*`

## 🐛 常见问题

### 问题 1: 开发环境出现 404

**原因**: 后端使用了错误的 profile

**解决**:
```bash
# 确保使用 dev profile
.\gradlew.bat bootRun --args='--spring.profiles.active=dev'
```

### 问题 2: 生产环境 API 调用失败

**原因**: 前端 API 配置不正确

**解决**: 检查 `NEXT_PUBLIC_API_URL` 环境变量或 `api-config.ts` 配置

### 问题 3: 部署后样式丢失

**原因**: Nginx/Apache 配置不正确

**解决**: 确保 web 服务器配置指向 `/personinfo/` 路径

## 📝 快速参考

### 开发命令
```bash
# 后端（开发模式）
cd server
.\gradlew.bat bootRun --args='--spring.profiles.active=dev'

# 前端（开发模式）
cd frontend
npm run dev
```

### 生产命令
```bash
# 后端（生产模式）
cd server
.\gradlew.bat build
java -jar build/libs/server.jar

# 前端（生产模式）
cd frontend
npm run build
# 然后部署 out/ 目录
```

## 🔗 相关配置文件

- 前端 Next 配置: `frontend/next.config.js`
- 前端 API 配置: `frontend/src/lib/api-config.ts`
- 后端生产配置: `server/src/main/resources/application.properties`
- 后端开发配置: `server/src/main/resources/application-dev.properties`
