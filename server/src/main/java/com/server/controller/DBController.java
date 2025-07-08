package com.server.controller;

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
@RequestMapping(value = "/info")
public class DBController {
    @Resource
    UserRepository userRepository;

    @RequestMapping(value = "/getById")
    public R getById(@RequestParam(value = "id") String id) {
        return R.ok(userRepository.findById(id));
    }

    @RequestMapping(value = "/save")
    public R save(@RequestBody User user) {
        if (StringUtils.isBlank(user.getId())) {
            user.setId(UUID.randomUUID().toString());
        }
        return R.ok(userRepository.save(user));
    }
}
