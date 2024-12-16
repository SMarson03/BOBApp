package com.GreenUnderground.GreenU.Gallery;

import com.GreenUnderground.GreenU.Restaurant.Restaurants;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface GalleriesRepo extends JpaRepository<Galleries, Integer> {
    List<Galleries> findByLocation(String location);
    List<Galleries> findByName(String name);
}