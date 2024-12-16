package com.GreenUnderground.GreenU.Cafe;

import com.GreenUnderground.GreenU.Common.Location;
import com.GreenUnderground.GreenU.Restaurant.Restaurants;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CafesRepo extends JpaRepository<Cafes, Integer> {
    List<Cafes> findByLocation(String location);
    List<Cafes> findByName(String name);
}