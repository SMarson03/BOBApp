package com.GreenUnderground.GreenU.Restaurant;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RestaurantsRepo extends JpaRepository<Restaurants, Integer> {
    List<Restaurants> findByLocation(String location);
    List<Restaurants> findByName(String name);
}