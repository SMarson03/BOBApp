package com.GreenUnderground.GreenU.Legal;

import com.GreenUnderground.GreenU.Restaurant.Restaurants;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LawyersRepo extends JpaRepository<Lawyers, Integer> {
    List<Lawyers> findByLocation(String location);
    List<Lawyers> findByName(String name);
}