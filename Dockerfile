FROM lucasmarfe/gradle-jdk17 as buildJar
WORKDIR /app
COPY . .
# 不再清空 static 目录，也不再复制前端构建产物
# RUN rm -rf server/src/main/resources/static/*
# COPY --from=buildDist /app/frontend/dist /server/src/main/resources/static/
# 复制前端文件到 flask 目录（如有需要可保留）
RUN cd /app/server && rm -rf build && gradle build
RUN cd /app/server/build/libs && mv server-0.0.1-SNAPSHOT.jar /app/server.jar
EXPOSE 8080

# 在容器中运行 Gunicorn 服务器
CMD ["java" , "-jar" , "/app/server.jar"]
