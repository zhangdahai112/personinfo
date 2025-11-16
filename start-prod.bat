@echo off
REM 生产环境构建和启动脚本

echo ==========================================
echo   生产环境构建和启动
echo ==========================================
echo.

REM 检查是否在项目根目录
if not exist "server" (
    echo 错误: 请在项目根目录运行此脚本
    pause
    exit /b 1
)

echo 请选择操作:
echo 1) 构建前端 (生成静态文件)
echo 2) 构建后端 (生成 JAR 文件)
echo 3) 构建全部
echo 4) 启动后端服务 (生产模式)
echo 5) 退出
echo.

set /p choice="请输入选项 [1-5]: "

if "%choice%"=="1" goto build_frontend
if "%choice%"=="2" goto build_backend
if "%choice%"=="3" goto build_all
if "%choice%"=="4" goto start_backend
if "%choice%"=="5" goto exit
echo 无效选项，请重试
pause
exit /b 1

:build_frontend
echo.
echo [前端] 开始构建...
echo basePath: /personinfo
echo.
cd frontend
call npm run build
echo.
echo ✅ 前端构建完成
echo 输出目录: frontend\out\
echo 部署命令: xcopy /E /I /Y out\* C:\inetpub\wwwroot\personinfo\
echo.
goto end

:build_backend
echo.
echo [后端] 开始构建...
echo context-path: /personinfo
echo.
cd server
call gradlew.bat build
echo.
echo ✅ 后端构建完成
echo JAR文件: server\build\libs\server-*.jar
echo.
goto end

:build_all
echo.
echo [全栈] 开始构建前后端...
echo.
echo 步骤 1/2: 构建前端...
cd frontend
call npm run build
if errorlevel 1 (
    echo ❌ 前端构建失败
    goto end
)
cd ..

echo.
echo 步骤 2/2: 构建后端...
cd server
call gradlew.bat build
if errorlevel 1 (
    echo ❌ 后端构建失败
    goto end
)
cd ..

echo.
echo ✅ 全栈构建完成
echo.
echo 前端输出: frontend\out\
echo 后端JAR: server\build\libs\server-*.jar
echo.
goto end

:start_backend
echo.
echo [后端] 启动生产服务...
echo 端口: 8080
echo context-path: /personinfo
echo API路径: http://localhost:8080/personinfo/api/
echo.
cd server
for %%f in (build\libs\*.jar) do (
    echo 启动: %%f
    java -jar %%f
)
goto end

:exit
echo 退出...
exit /b 0

:end
pause
