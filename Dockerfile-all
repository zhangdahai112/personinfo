FROM uselagoon/node-20 as buildDist
# 将工作目录切换到 /app
WORKDIR /app
COPY . .
# 构建前端
RUN rm -rf frontend/node_modules frontend/dist
RUN cd frontend && npm config set registry https://registry.npmmirror.com/ && npm i \
&& npm run build

FROM lucasmarfe/gradle-jdk17 as buildJar
WORKDIR /app
COPY . .
RUN rm -rf server/src/main/resources/static/*
COPY --from=buildDist /app/frontend/dist /server/src/main/resources/static/
RUN ls /server/src/main/resources/static/
# 复制前端文件到 flask 目录
RUN cd /app/server && rm -rf build && gradle build
RUN cd /app/server/build/libs && mv server-0.0.1-SNAPSHOT.jar /app/server.jar
EXPOSE 8080
EXPOSE 8081

# 在容器中运行 Gunicorn 服务器
CMD ["java" , "-jar" , "/app/server.jar"]
