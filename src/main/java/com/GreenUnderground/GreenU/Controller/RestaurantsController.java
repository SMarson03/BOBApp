package com.GreenUnderground.GreenU.Controller;

import com.GreenUnderground.GreenU.Gallery.Galleries;
import com.GreenUnderground.GreenU.Gallery.GalleriesRepo;
import com.GreenUnderground.GreenU.Restaurant.Restaurants;
import com.GreenUnderground.GreenU.Restaurant.RestaurantsRepo;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/NoirX")
public class RestaurantsController {
    private final RestaurantsRepo restaurantsRepo;

    public RestaurantsController(RestaurantsRepo restaurantsRepo) {
        this.restaurantsRepo = restaurantsRepo;
    }

    @GetMapping("/restaurants")
    public List<Restaurants> getAllRestaurants() {
        List<Restaurants> restaurants = restaurantsRepo.findAll();
        return restaurants;
    }

    @GetMapping("/restaurants/{id}")
    Restaurants getRestaurantsByID(@PathVariable Integer id) {
        Optional<Restaurants> restaurants = restaurantsRepo.findById(id);
        if (restaurants.isEmpty()) {
            throw new RuntimeException();
        }
        return restaurants.get();
    }


    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PutMapping("/restaurants/{id}")
    void updateRestaurants(@RequestBody Restaurants restaurants, @PathVariable Integer id) {
        restaurantsRepo.save(restaurants);

        restaurantsRepo.save(restaurants);
    }

    //Delete
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/restaurants/{id}")
    void deleteRestaurants(@PathVariable Integer id) {
        restaurantsRepo.deleteById(id);

        restaurantsRepo.deleteById(id);
    }
}
