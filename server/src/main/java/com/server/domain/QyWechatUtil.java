package com.server.domain;

import com.fasterxml.jackson.databind.ObjectMapper;
import okhttp3.*;
import org.apache.commons.lang3.StringUtils;

import java.io.IOException;
import java.util.Collections;
import java.util.List;

/**
 * 企业微信机器人消息发送工具类
 * 示例:
 * QyWechatUtils.sendTextMessage("693axxx6-7aoc-4bc4-97a0-0ec2sifa5aaa", "hello world");
 */
public class QyWechatUtil {

    private static final String WEBHOOK_URL = "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=%s";
    private static final MediaType JSON = MediaType.parse("application/json; charset=utf-8");
    private static final OkHttpClient CLIENT = new OkHttpClient();
    private static final ObjectMapper MAPPER = new ObjectMapper();

    /**
     * 群聊机器人发送文本消息
     *
     * @param key     企业微信机器人 key
     * @param content 消息内容
     * @return 响应内容（JSON字符串）
     */
    public static String sendTextMessage(String key, Object content) {
        if (StringUtils.isBlank(key)) {
            key = "f419e037-9daf-4f7a-80d3-4bdf241b06f7";
        }
        String url = String.format(WEBHOOK_URL, key);
        try {
            // 构造请求体
            String json = MAPPER.writeValueAsString(content);
            RequestBody body = RequestBody.create(JSON, json);

            Request request = new Request.Builder()
                    .url(url)
                    .post(body)
                    .build();

            // 发送请求
            try (Response response = CLIENT.newCall(request).execute()) {
                if (!response.isSuccessful()) {
                    throw new IOException("Unexpected code " + response);
                }
                return response.body() != null ? response.body().string() : null;
            }
        } catch (Exception e) {
            throw new RuntimeException("发送企业微信消息失败: " + e.getMessage(), e);
        }
    }

    /**
     * 格式化视频消息通知markdown文本
     *
     * @param url
     * @param coverImage
     * @return
     */
    public static PicTextMsg getVideoCompleteMsg(String url, String coverImage) {
        return new PicTextMsg("视频已生成，点击前往查看>>", url, url, coverImage);

    }

    /**
     * 格式化视频创建消息通知markdown文本
     *
     * @param url 视频链接
     * @return MarkdownMsg
     */
    public static MarkdownMsg getVideoCreateMsg(String url) {
        String content = String.format(
                "您的今日内容脚本:\n" +
                        "[%s](%s)\n" +
                        "拍摄：请点击以上链接进行模仿拍摄\n" +
                        "💡升级玩法：\n" +
                        "您也可以对拍摄环境和内容进行调整，尽量符合粉丝兴趣和您的人设。\n\n",
                url, url
        );
        return new MarkdownMsg(content);
    }

    /**
     * 格式化用户联系信息提交通知
     *
     * @param contactInfo 用户联系信息JSON对象
     * @return MarkdownMsg
     */
    public static MarkdownMsg getUserSubmitNotification(com.alibaba.fastjson.JSONObject contactInfo) {
        if (contactInfo == null || contactInfo.isEmpty()) {
            return new MarkdownMsg("📝 新用户提交\n> 暂无联系信息");
        }

        StringBuilder content = new StringBuilder();
        content.append("📝 **新用户信息提交通知**\n\n");
        content.append(">───────────────────\n\n");

        // 遍历contactInfo的所有字段
        contactInfo.forEach((key, value) -> {
            if (value != null && StringUtils.isNotBlank(value.toString())) {
                String fieldName = formatFieldName(key);
                content.append(String.format(">**%s**: %s\n", fieldName, value));
            }
        });

        content.append(">\n>───────────────────\n");
        content.append(String.format(">⏰ 提交时间: %s", new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new java.util.Date())));

        return new MarkdownMsg(content.toString());
    }

    /**
     * 格式化字段名称（将驼峰命名转换为可读格式）
     *
     * @param fieldName 字段名
     * @return 格式化后的字段名
     */
    private static String formatFieldName(String fieldName) {
        // 简单的字段名映射
        switch (fieldName) {
            case "name":
            case "userName":
            case "fullName":
                return "姓名";
            case "phone":
            case "mobile":
            case "phoneNumber":
                return "手机号码";
            case "email":
            case "emailAddress":
                return "邮箱";
            case "address":
                return "地址";
            case "company":
                return "公司";
            case "position":
            case "job":
                return "职位";
            case "wechat":
            case "wechatId":
                return "微信号";
            case "qq":
            case "qqNumber":
                return "QQ号";
            default:
                // 如果没有匹配的，返回首字母大写的原字段名
                return fieldName.substring(0, 1).toUpperCase() + fieldName.substring(1);
        }
    }


    /**
     * 企业微信机器人 图文消息 (news) 数据结构
     * <p>
     * 对应 JSON:
     * {
     * "msgtype": "news",
     * "news": {
     * "articles": [{
     * "title": "中秋节礼品领取",
     * "description": "今年中秋节公司有豪礼相送",
     * "url": "www.qq.com",
     * "picurl": "https://res.mail.qq.com/node/ww/wwopenmng/images/independent/doc/test_pic_msg1.png"
     * }]
     * }
     * }
     */
    static class PicTextMsg extends TextMsg {
        private final String msgtype = "news";
        private final News news;

        public PicTextMsg(String title, String description, String url, String picurl) {
            super(description);
            Article article = new Article(title, description, url, picurl);
            this.news = new News(Collections.singletonList(article));
        }

        public String getMsgtype() {
            return msgtype;
        }

        public News getNews() {
            return news;
        }

        /**
         * 内部类: news
         */
        public static class News {
            private final List<Article> articles;

            public News(List<Article> articles) {
                this.articles = articles;
            }

            public List<Article> getArticles() {
                return articles;
            }
        }
    }

    /**
     * 内部类: article
     */
    public static class Article {
        private final String title;
        private final String description;
        private final String url;
        private final String picurl;

        public Article(String title, String description, String url, String picurl) {
            this.title = title;
            this.description = description;
            this.url = url;
            this.picurl = picurl;
        }

        public String getTitle() {
            return title;
        }

        public String getDescription() {
            return description;
        }

        public String getUrl() {
            return url;
        }

        public String getPicurl() {
            return picurl;
        }
    }

    /**
     * 封装文本消息结构
     */
    public static class TextMsg {
        public final String msgtype = "text";
        public final Text text;

        public TextMsg(String content) {
            this.text = new Text(content);
        }

        static class Text {
            public final String content;

            public Text(String content) {
                this.content = content;
            }
        }
    }

    /**
     * 封装Markdown消息结构
     */
    public static class MarkdownMsg {
        public final String msgtype = "markdown";
        public final Markdown markdown;

        public MarkdownMsg(String content) {
            this.markdown = new Markdown(content);
        }

        public String getMsgtype() {
            return msgtype;
        }

        public Markdown getMarkdown() {
            return markdown;
        }

        static class Markdown {
            public final String content;

            public Markdown(String content) {
                this.content = content;
            }

            public String getContent() {
                return content;
            }
        }
    }

    // 测试用例
    public static void main(String[] args) {
        String key = "5ab2747c-2a2b-42c3-96ee-1190d80faa81";
        
        // // 测试图文消息
        // String result1 = sendTextMessage(key, QyWechatUtil.getVideoCompleteMsg("https://zhiz.com.cn/chat-flow/#/videoPreview?id=c8eb06d611b24196a19733b36b0f60b8", "https://zhiz.com.cn/static/tasks/d4f9f655-5426-4bab-8e55-921a6d3c4215/cover.jpg"));
        // System.out.println("图文消息: " + result1);
        
        // 测试Markdown消息
        String result2 = sendTextMessage(key, QyWechatUtil.getVideoCreateMsg(
            "https://zhiz.com.cn/chat-flow/#/videoMake?id=f011d4c60ead49b78cc43563a0aa109d"
        ));
        System.out.println("Markdown消息: " + result2);
    }
}

