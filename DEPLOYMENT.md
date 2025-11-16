# Frontend Static Build & Deployment Guide

## Overview
The frontend is configured for static export (no SSR), allowing it to be deployed separately from the backend on any static hosting service (Nginx, Apache, CDN, etc.).

## Build for Production

### 1. Set Environment Variables

Create a `.env.production` file in the frontend directory:

```bash
NEXT_PUBLIC_API_URL=https://your-backend-domain.com/personinfo/api
```

Or for local testing:
```bash
NEXT_PUBLIC_API_URL=http://localhost:8080/personinfo/api
```

### 2. Build Static Files

```bash
cd frontend
npm run build
# or
pnpm build
```

This will generate static files in the `out/` directory.

### 3. Output Structure

```
frontend/out/
├── _next/
│   ├── static/
│   └── ...
├── index.html
├── questionnaire.html
├── search.html
└── ...
```

## Deployment Options

### Option 1: Nginx Deployment

1. Copy the `out/` directory to your server:
```bash
scp -r out/* user@server:/var/www/html/
```

2. Nginx configuration:
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/html;
    
    location / {
        try_files $uri $uri.html $uri/ =404;
    }
    
    # Optional: Reverse proxy to backend
    location /personinfo/api/ {
        proxy_pass http://backend-server:8080/personinfo/api/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

### Option 2: Apache Deployment

1. Copy files to Apache document root:
```bash
cp -r out/* /var/www/html/
```

2. Create `.htaccess`:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Option 3: CDN / Static Hosting (Vercel, Netlify, AWS S3, etc.)

Simply upload the `out/` directory to your static hosting service.

**Important:** Configure the backend API URL via environment variables before building.

## CORS Configuration (Backend)

Since frontend and backend are on different domains, configure CORS in Spring Boot:

Add to `server/src/main/java/com/server/server/ServerApplication.java`:

```java
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@SpringBootApplication
public class ServerApplication {
    
    public static void main(String[] args) {
        SpringApplication.run(ServerApplication.class, args);
    }
    
    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.addAllowedOrigin("https://your-frontend-domain.com");
        config.addAllowedOrigin("http://localhost:3000"); // for development
        config.addAllowedHeader("*");
        config.addAllowedMethod("*");
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
}
```

## Development vs Production

### Development (with proxy)
```bash
npm run dev
# API calls go to: http://localhost:3000/personinfo/api/* 
# (proxied to backend)
```

### Production (static export)
```bash
npm run build
# API calls go directly to: NEXT_PUBLIC_API_URL
# (configured in .env.production)
```

## Testing Static Build Locally

```bash
# Build static files
npm run build

# Serve with a simple HTTP server
npx serve out
# or
python -m http.server 8000 -d out
```

Then open http://localhost:8000

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_API_URL` | Backend API base URL | `https://api.example.com/personinfo/api` |

## Troubleshooting

### Issue: API calls fail with 404
- Check that `NEXT_PUBLIC_API_URL` is set correctly
- Verify backend is accessible from frontend domain
- Check CORS configuration on backend

### Issue: Routing doesn't work
- Ensure your web server is configured to serve index.html for all routes
- Check nginx/apache configuration

### Issue: Static assets not loading
- Verify `basePath` in next.config.js matches deployment path
- Check `assetPrefix` if using CDN

## Notes

- Static export means no server-side rendering (SSR)
- API routes (`/api/*`) are not supported in static export
- Dynamic routes work, but are pre-rendered at build time
- Client-side data fetching still works normally
