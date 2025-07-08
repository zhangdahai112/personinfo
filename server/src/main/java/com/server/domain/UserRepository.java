package com.server.domain;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {

    User getById(String id);

    void deleteById(String id);

    User save(User user);

    boolean existsById(String id);

}
