# 链接路径配置总结

## ✅ 已修复的组件

### 1. Navigation.tsx
**修改内容**：
- 桌面端导航：`<a href>` → `<Link href>`
- 移动端导航：`<a href>` → `<Link href>`
- 移动端"开始查询"按钮：添加了 `<Link href="/questionnaire">`

**路径列表**：
- `/` - 首页
- `/consultation` - 咨询服务
- `/search` - 查询服务
- `/privacy` - 隐私保护
- `/dashboard` - 我的查询
- `/auth` - 登录/注册
- `/questionnaire` - 开始查询

### 2. HeroSection.tsx
**已使用 Link 组件**：
- `/questionnaire` - 开始查询按钮
- `/search` - 了解流程按钮

### 3. Footer.tsx
**使用锚点链接**（无需修改）：
- 所有 Footer 链接使用 `#` 锚点，用于页面内跳转

## 🎯 basePath 配置

### next.config.js
```javascript
basePath: '/personinfo'
```

### 路径映射

| 组件内路径 | 实际访问路径 |
|-----------|------------|
| `/` | `/personinfo/` |
| `/questionnaire` | `/personinfo/questionnaire/` |
| `/search` | `/personinfo/search/` |
| `/dashboard` | `/personinfo/dashboard/` |
| `/auth` | `/personinfo/auth/` |

## 📋 Next.js Link 组件的优势

使用 `<Link>` 组件而不是 `<a>` 标签的好处：

1. **自动处理 basePath**：Next.js 会自动添加 `/personinfo` 前缀
2. **客户端路由**：页面跳转不会重新加载整个页面
3. **预加载**：鼠标悬停时预加载目标页面
4. **更好的性能**：使用 React 的客户端导航

## ✅ 验证清单

构建后检查以下内容：

- [ ] 所有导航链接都指向 `/personinfo/*`
- [ ] 点击链接不会触发整页刷新
- [ ] 直接访问 URL（如 `/personinfo/questionnaire/`）可以正常加载
- [ ] 浏览器前进/后退按钮正常工作
- [ ] 移动端菜单链接正常工作

## 🔍 如何检查路径是否正确

### 1. 构建项目
```bash
npm run build
```

### 2. 检查生成的 HTML
查看 `out/index.html`，所有链接应该包含 `/personinfo` 前缀。

### 3. 本地测试
```bash
npx serve out
# 访问 http://localhost:3000/personinfo/
```

### 4. 检查开发者工具
- 打开浏览器开发者工具
- 检查 Network 标签
- 点击导航链接，确认不会有完整的页面重新加载

## 🐛 常见问题

### 问题 1：点击链接出现 404
**原因**：可能使用了 `<a>` 标签而不是 `<Link>` 组件
**解决**：检查所有导航链接，确保使用 `<Link>` 组件

### 问题 2：链接缺少 /personinfo 前缀
**原因**：`next.config.js` 中 `basePath` 配置不正确
**解决**：确认配置为 `basePath: '/personinfo'`

### 问题 3：页面刷新后 404
**原因**：Web 服务器配置不正确
**解决**：配置服务器将所有请求重定向到 `index.html`

## 📝 开发规范

在开发新页面时，请遵循以下规范：

1. **使用 Link 组件**
```tsx
import Link from "next/link"

// ✅ 正确
<Link href="/path">链接文本</Link>

// ❌ 错误
<a href="/path">链接文本</a>
```

2. **外部链接使用 a 标签**
```tsx
// ✅ 正确（外部链接）
<a href="https://external.com" target="_blank" rel="noopener">外部链接</a>
```

3. **页面内锚点使用 a 标签**
```tsx
// ✅ 正确（页面内跳转）
<a href="#section">跳转到章节</a>
```

## 🔗 相关文件

- 导航组件：`frontend/src/components/Navigation.tsx`
- Hero 组件：`frontend/src/components/HeroSection.tsx`
- Footer 组件：`frontend/src/components/Footer.tsx`
- Next 配置：`frontend/next.config.js`
