# 构建阶段
FROM gradle:8.5.0-jdk17 AS builder
WORKDIR /app
COPY . .
RUN cd server && gradle build

# 运行阶段
FROM eclipse-temurin:17-jre-jammy
WORKDIR /app
COPY --from=builder /app/server/build/libs/server-0.0.1-SNAPSHOT.jar /app/server.jar
EXPOSE 8080
CMD ["java", "-jar", "/app/server.jar"]
