# Quick Start Guide - Static Build & Deployment

## 🎯 Understanding Static Export Paths

Next.js static export generates files with `_next/` directory. The path configuration depends on where you deploy:

- **Root domain** (`https://example.com/`) - Use default config
- **Subdirectory** (`https://example.com/personinfo/`) - Set `basePath`
- **CDN** (`https://cdn.example.com/`) - Set `assetPrefix`

## 🚀 Quick Build Commands

### Option 1: Root Domain Deployment (Recommended)

```bash
cd frontend
npm run build:root
```

Deploy to web server root:
```bash
sudo cp -r out/* /var/www/html/
```

### Option 2: Subdirectory Deployment

```bash
cd frontend
npm run build:subdirectory
```

Deploy to subdirectory:
```bash
sudo cp -r out/* /var/www/html/personinfo/
```

Access at: `https://your-domain.com/personinfo/`

### Option 3: CDN Deployment

1. Create `.env.production`:
```bash
NEXT_PUBLIC_ASSET_PREFIX=https://cdn.example.com
NEXT_PUBLIC_API_URL=https://api.example.com/personinfo/api
```

2. Build:
```bash
npm run build:cdn
```

3. Upload `out/` to your CDN

## 🛠️ Using Deployment Scripts

### Windows:
```bash
cd frontend
deploy.bat
```

### Linux/Mac:
```bash
cd frontend
chmod +x deploy.sh
./deploy.sh
```

The scripts will guide you through the deployment process.

## 🔧 Backend Configuration

### Enable CORS (Required for separate deployment)

The backend already has CORS configuration in:
`server/src/main/java/com/server/config/CorsConfig.java`

Update allowed origins for production:
```java
config.addAllowedOrigin("https://your-frontend-domain.com");
```

### Start Backend

```bash
cd server
.\gradlew.bat bootRun
```

Backend will run on: http://localhost:8080

## 📁 Output Structure

```
frontend/out/
├── _next/
│   ├── static/
│   │   ├── chunks/
│   │   └── css/
│   └── ...
├── questionnaire.html
├── search.html
├── index.html
└── ...
```

## 🌐 Deployment Architectures

### Architecture 1: Same Server, Different Paths
```
https://example.com/           → Frontend (Nginx serving static files)
https://example.com/personinfo/api/* → Backend (Reverse proxy to :8080)
```

Nginx config:
```nginx
server {
    listen 80;
    server_name example.com;
    
    # Frontend static files
    root /var/www/html;
    
    # Backend API proxy
    location /personinfo/api/ {
        proxy_pass http://localhost:8080/personinfo/api/;
    }
}
```

### Architecture 2: Separate Domains
```
https://app.example.com/       → Frontend (Static hosting)
https://api.example.com/personinfo/api/* → Backend (Application server)
```

Environment:
```bash
NEXT_PUBLIC_API_URL=https://api.example.com/personinfo/api
```

### Architecture 3: CDN + Backend
```
https://cdn.example.com/       → Frontend (CDN/S3)
https://backend.example.com/personinfo/api/* → Backend (EC2/Server)
```

## ✅ Verification

After deployment, verify:

1. **Frontend accessible**: Visit your frontend URL
2. **API connectivity**: Open browser console and check for API errors
3. **CORS working**: No CORS errors in browser console

## 🐛 Common Issues

### Issue: API 404 errors
**Solution**: Check `NEXT_PUBLIC_API_URL` in `.env.production` matches backend URL

### Issue: CORS errors
**Solution**: Update `CorsConfig.java` to include your frontend domain

### Issue: Routes don't work (404 on refresh)
**Solution**: Configure web server to serve `index.html` for all routes

## 📝 Build Summary

| Command | Purpose |
|---------|---------|
| `npm run build` | Build static files (output to `out/`) |
| `npm run dev` | Development mode with hot reload |
| `npm run start` | Not needed for static export |

## 🔗 Related Files

- Frontend config: `frontend/next.config.js`
- API config: `frontend/src/lib/api-config.ts`
- Environment: `frontend/.env.production`
- Backend CORS: `server/src/main/java/com/server/config/CorsConfig.java`
- Full guide: `DEPLOYMENT.md`
