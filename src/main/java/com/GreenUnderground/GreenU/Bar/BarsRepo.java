package com.GreenUnderground.GreenU.Bar;

import com.GreenUnderground.GreenU.Restaurant.Restaurants;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BarsRepo extends JpaRepository<Bars, Integer> {
    List<Bars> findByLocation(String location);
    List<Bars> findByName(String name);
}
