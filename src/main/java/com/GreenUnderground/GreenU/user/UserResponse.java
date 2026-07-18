package com.GreenUnderground.GreenU.user;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserResponse {

    private Integer id;

    private String name;

    private String email;

    private String role;


    public UserResponse(
            Integer id,
            String name,
            String email,
            String role
    ){
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
    }

}
