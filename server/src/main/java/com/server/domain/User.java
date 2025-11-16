package com.server.domain;

import com.alibaba.fastjson.JSONObject;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "user")
@Data
public class User {

    @Id
    private String id;
    private JSONObject contactInfo;
    private JSONObject answers;


    // getters and setters
}
