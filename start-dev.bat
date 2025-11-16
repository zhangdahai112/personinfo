@echo off
REM 开发环境启动脚本

echo ==========================================
echo   开发环境启动
echo ==========================================
echo.

REM 检查是否在项目根目录
if not exist "server" (
    echo 错误: 请在项目根目录运行此脚本
    pause
    exit /b 1
)

echo 请选择要启动的服务:
echo 1) 只启动后端 (端口 8080)
echo 2) 只启动前端 (端口 3000)
echo 3) 同时启动前后端
echo 4) 退出
echo.

set /p choice="请输入选项 [1-4]: "

if "%choice%"=="1" goto start_backend
if "%choice%"=="2" goto start_frontend
if "%choice%"=="3" goto start_both
if "%choice%"=="4" goto exit
echo 无效选项，请重试
pause
exit /b 1

:start_backend
echo.
echo [后端] 启动开发环境 (dev profile)...
echo 端口: 8080
echo API路径: http://localhost:8080/api/
echo.
cd server
call gradlew.bat bootRun --args="--spring.profiles.active=dev"
goto end

:start_frontend
echo.
echo [前端] 启动开发服务器...
echo 端口: 3000
echo 访问: http://localhost:3000/
echo.
cd frontend
call npm run dev
goto end

:start_both
echo.
echo [全栈] 启动前后端服务...
echo.
echo 正在启动后端 (端口 8080)...
start "后端服务 - dev" cmd /k "cd server && gradlew.bat bootRun --args=\"--spring.profiles.active=dev\""
timeout /t 3 /nobreak >nul

echo 正在启动前端 (端口 3000)...
start "前端服务 - dev" cmd /k "cd frontend && npm run dev"
echo.
echo ✅ 服务已启动
echo.
echo 前端: http://localhost:3000/
echo 后端: http://localhost:8080/api/
echo.
goto end

:exit
echo 退出...
exit /b 0

:end
pause
