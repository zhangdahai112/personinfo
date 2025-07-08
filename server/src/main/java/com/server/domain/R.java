package com.server.domain;


import java.util.HashMap;
import java.util.Map;

public class R {
    private boolean success;
    private Object data;
    private String message;

    private R() {
    }

    public static R ok(Object data) {
        R r = new R();
        r.success = true;
        r.data = data;
        return r;
    }

    public static R ok() {
        R r = new R();
        r.success = true;
        return r;
    }

    public static R error(String message) {
        R r = new R();
        r.success = false;
        r.message = message;
        return r;
    }

    public boolean isSuccess() {
        return success;
    }

    public Object getData() {
        return data;
    }

    public String getMessage() {
        return message;
    }
}
