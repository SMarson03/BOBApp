package com.GreenUnderground.GreenU.Controller;

import com.GreenUnderground.GreenU.user.*;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/NoirX")
public class AuthController {


    private final UserRepo userRepo;

    private final PasswordEncoder passwordEncoder;



    public AuthController(
            UserRepo userRepo,
            PasswordEncoder passwordEncoder
    ){

        this.userRepo = userRepo;
        this.passwordEncoder = passwordEncoder;

    }





    // LOGIN

    @PostMapping("/login")
    public UserResponse login(
            @RequestBody LoginRequest request
    ){

        User user =
                userRepo.findByEmail(request.getEmail())
                        .orElseThrow(() ->
                                new RuntimeException("User not found")
                        );


        if(!passwordEncoder.matches(
                request.getPassword(),
                user.getPassword()
        )){

            throw new RuntimeException(
                    "Invalid Password"
            );

        }


        return new UserResponse(
                user.getId(),
                user.getName(),
                user.getEmail(),
                user.getRole()
        );

    }





    // SIGNUP

    @PostMapping("/signup")
    public UserResponse signup(
            @RequestBody User user
    ){

        if(userRepo.findByEmail(user.getEmail()).isPresent()){

            throw new RuntimeException(
                    "Email already exists"
            );

        }



        user.setPassword(
                passwordEncoder.encode(
                        user.getPassword()
                )
        );



        user.setRole("USER");



        User savedUser =
                userRepo.save(user);



        return new UserResponse(
                savedUser.getId(),
                savedUser.getName(),
                savedUser.getEmail(),
                savedUser.getRole()
        );

    }





    // GET ALL USERS (PASSWORD HIDDEN)

    @GetMapping("/users")
    public List<UserResponse> getUsers(){

        return userRepo.findAll()
                .stream()
                .map(user -> new UserResponse(
                        user.getId(),
                        user.getName(),
                        user.getEmail(),
                        user.getRole()
                ))
                .toList();

    }





    // GET USER BY ID (PASSWORD HIDDEN)

    @GetMapping("/users/{id}")
    public UserResponse getUserById(
            @PathVariable Integer id
    ){

        User user =
                userRepo.findById(id)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "User not found"
                                )
                        );


        return new UserResponse(
                user.getId(),
                user.getName(),
                user.getEmail(),
                user.getRole()
        );

    }


}