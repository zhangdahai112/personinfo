package com.server.controller;

import com.server.domain.QyWechatUtil;
import com.server.domain.R;
import com.server.domain.User;
import com.server.domain.UserRepository;
import jakarta.annotation.Resource;
import org.apache.commons.lang3.StringUtils;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequestMapping(value = "/api")
public class DBController {
    @Resource
    UserRepository userRepository;

    @RequestMapping(value = "/getById")
    public R getById(@RequestParam(value = "id") String id) {
        return R.ok(userRepository.findById(id));
    }

    @RequestMapping(value = "/submit")
    public R save(@RequestBody User user) {
        if (StringUtils.isBlank(user.getId())) {
            user.setId(UUID.randomUUID().toString());
        }
        User savedUser = userRepository.save(user);
        
        // 发送企业微信通知
        try {
            QyWechatUtil.MarkdownMsg notification = QyWechatUtil.getUserSubmitNotification(user.getContactInfo());
            QyWechatUtil.sendTextMessage(null, notification); // 使用默认key
        } catch (Exception e) {
            // 记录日志但不影响保存操作
            System.err.println("发送企业微信通知失败: " + e.getMessage());
        }
        
        return R.ok(savedUser);
    }
}
