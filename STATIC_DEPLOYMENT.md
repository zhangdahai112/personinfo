# Static Export Deployment Guide

## Understanding Next.js Static Export Paths

When using `output: 'export'`, Next.js generates static files with `_next/` directory for assets. The path behavior depends on your deployment scenario.

## Deployment Scenarios

### Scenario 1: Root Domain Deployment (Recommended)
**Deploy to**: `https://example.com/`

**Configuration**: Use `next.config.root.js`

```bash
npm run build:root
# or manually:
cp next.config.root.js next.config.js
npm run build
```

**Nginx Configuration**:
```nginx
server {
    listen 80;
    server_name example.com;
    root /var/www/html;
    
    location / {
        try_files $uri $uri/ $uri.html =404;
    }
    
    # Proxy API calls to backend
    location /personinfo/api/ {
        proxy_pass http://localhost:8080/personinfo/api/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

**Deploy**:
```bash
sudo cp -r out/* /var/www/html/
```

---

### Scenario 2: Subdirectory Deployment
**Deploy to**: `https://example.com/personinfo/`

**Configuration**: Use `next.config.subdirectory.js`

```bash
npm run build:subdirectory
# or manually:
cp next.config.subdirectory.js next.config.js
npm run build
```

**Important**: This adds `/personinfo` prefix to all routes and assets.

**Nginx Configuration**:
```nginx
server {
    listen 80;
    server_name example.com;
    root /var/www/html;
    
    # Frontend static files
    location /personinfo/ {
        alias /var/www/html/personinfo/;
        try_files $uri $uri/ $uri.html =404;
    }
    
    # Backend API (if on same domain)
    location /personinfo/api/ {
        proxy_pass http://localhost:8080/personinfo/api/;
    }
}
```

**Deploy**:
```bash
sudo mkdir -p /var/www/html/personinfo
sudo cp -r out/* /var/www/html/personinfo/
```

**Access**:
- Frontend: `https://example.com/personinfo/`
- API: `https://example.com/personinfo/api/`

---

### Scenario 3: CDN Deployment with Absolute Paths
**Deploy to**: CDN with backend on different domain

**Configuration**: Use `next.config.cdn.js`

**Set environment variable**:
```bash
# .env.production
NEXT_PUBLIC_ASSET_PREFIX=https://cdn.example.com
NEXT_PUBLIC_API_URL=https://api.example.com/personinfo/api
```

```bash
npm run build:cdn
```

**Deploy**:
- Upload `out/` to CDN (S3, CloudFront, etc.)
- Backend remains on `api.example.com`

**Access**:
- Frontend: `https://cdn.example.com/`
- API: `https://api.example.com/personinfo/api/`

---

## Understanding `_next/` Directory

After build, the structure looks like:

```
out/
├── _next/
│   └── static/
│       ├── chunks/
│       └── css/
├── index.html
├── questionnaire.html
└── ...
```

### Path Behavior:

1. **Root deployment**: Paths are `/_next/static/...`
   - Works at: `https://example.com/`

2. **Subdirectory deployment with basePath**: Paths become `/personinfo/_next/static/...`
   - Works at: `https://example.com/personinfo/`

3. **CDN with assetPrefix**: Paths become `https://cdn.example.com/_next/static/...`
   - Works anywhere

---

## Quick Commands

### For Root Domain
```bash
npm run build:root
sudo cp -r out/* /var/www/html/
```

### For Subdirectory
```bash
npm run build:subdirectory
sudo cp -r out/* /var/www/html/personinfo/
```

### For CDN
```bash
# Set env vars first
echo "NEXT_PUBLIC_ASSET_PREFIX=https://cdn.example.com" > .env.production
npm run build:cdn
# Upload out/ to CDN
```

---

## Testing Locally

### Test root deployment:
```bash
npm run build:root
npx serve out -p 8000
# Visit: http://localhost:8000
```

### Test subdirectory deployment:
```bash
npm run build:subdirectory
npx serve out -p 8000
# Visit: http://localhost:8000/personinfo
```

---

## Common Issues & Solutions

### Issue 1: Assets return 404
**Problem**: `_next/static/` files not found

**Solutions**:
- For root: Ensure web server root points to `out/` directory
- For subdirectory: Use `basePath` in config and deploy to correct path
- Check nginx/apache is serving static files correctly

### Issue 2: Routes don't work (404 on refresh)
**Problem**: Direct URL access fails

**Solution**: Configure web server to serve `index.html` for all routes:

**Nginx**:
```nginx
try_files $uri $uri.html $uri/ =404;
```

**Apache** (.htaccess):
```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

### Issue 3: API calls fail with CORS
**Problem**: Backend blocks requests from frontend domain

**Solution**: Configure CORS in backend (already done in `CorsConfig.java`):
```java
config.addAllowedOrigin("https://your-frontend-domain.com");
```

---

## Recommended Approach

**For most cases**: Use **Root Domain Deployment** (Scenario 1)
- Simplest configuration
- No path prefix complications
- Best performance

**When to use subdirectory**: When you need multiple apps on same domain
**When to use CDN**: For global distribution and caching

---

## Environment Variables Summary

| Scenario | NEXT_PUBLIC_API_URL | NEXT_PUBLIC_ASSET_PREFIX | basePath |
|----------|---------------------|--------------------------|----------|
| Root | `http://localhost:8080/personinfo/api` | Not set | Not set |
| Subdirectory | `http://localhost:8080/personinfo/api` | Not set | `/personinfo` |
| CDN | `https://api.example.com/personinfo/api` | `https://cdn.example.com` | Not set |

---

## Quick Reference

```bash
# Development
npm run dev

# Build for production (default - root deployment)
npm run build

# Build for specific deployment
npm run build:root          # For https://example.com/
npm run build:subdirectory  # For https://example.com/personinfo/
npm run build:cdn           # For CDN deployment

# Test locally
npx serve out
```
